import {
  forwardRef,
  useRef,
  useEffect,
  cloneElement,
  Children,
} from 'react'
import gsap from 'gsap'
import './CardSwap.css'

export const Card = forwardRef(({ children, style, className = '' }, ref) => (
  <div ref={ref} className={`card ${className}`} style={style}>
    {children}
  </div>
))
Card.displayName = 'Card'

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  width = 500,
  height = 300,
  easing = 'elastic.out(0.6,0.9)',
}) {
  const containerRef = useRef(null)
  const refsArr = useRef([])
  const intervalRef = useRef(null)
  const slotsRef = useRef([])
  const dragRef = useRef({ active: false, startX: 0, startY: 0, dragging: false })
  const cyclingRef = useRef(false)

  const childArray = Children.toArray(children)
  const count = childArray.length

  refsArr.current = Array.from({ length: count }, (_, i) => refsArr.current[i] || { current: null })

  function getSlotStyle(slot) {
    const offset = count - 1 - slot
    return {
      x: offset * -cardDistance,
      y: offset * verticalDistance,
      scale: 1 - offset * 0.06,
      zIndex: slot,
    }
  }

  function animateToSlot(el, slot) {
    const { x, y, scale, zIndex } = getSlotStyle(slot)
    gsap.to(el, { x, y, scale, zIndex, duration: 0.75, ease: easing })
  }

  function cycle() {
    if (cyclingRef.current) return
    cyclingRef.current = true
    const slots = slotsRef.current
    const frontIdx = slots.indexOf(count - 1)
    const frontEl = refsArr.current[frontIdx]?.current
    if (!frontEl) { cyclingRef.current = false; return }

    gsap.to(frontEl, {
      x: '+=140',
      y: '-=20',
      rotation: 7,
      opacity: 0,
      duration: 0.38,
      ease: 'power2.in',
      onComplete: () => {
        const newSlots = slots.map((s, i) => i === frontIdx ? 0 : s + 1)
        slotsRef.current = newSlots

        const backStyle = getSlotStyle(0)
        gsap.set(frontEl, { ...backStyle, rotation: 0, opacity: 0 })

        refsArr.current.forEach((r, i) => {
          if (r.current && i !== frontIdx) animateToSlot(r.current, newSlots[i])
        })

        gsap.to(frontEl, {
          opacity: 1, duration: 0.35, delay: 0.15,
          onComplete: () => { cyclingRef.current = false }
        })
      },
    })
  }

  function restartInterval() {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(cycle, delay)
  }

  useEffect(() => {
    const initialSlots = Array.from({ length: count }, (_, i) => count - 1 - i)
    slotsRef.current = initialSlots

    refsArr.current.forEach((r, i) => {
      if (!r.current) return
      const { x, y, scale, zIndex } = getSlotStyle(initialSlots[i])
      gsap.set(r.current, { x, y, scale, zIndex, opacity: 1, rotation: 0 })
    })

    restartInterval()

    const el = containerRef.current
    if (!el) return

    const handlers = []

    if (pauseOnHover) {
      const pause = () => clearInterval(intervalRef.current)
      const resume = () => restartInterval()
      el.addEventListener('mouseenter', pause)
      el.addEventListener('mouseleave', resume)
      handlers.push(['mouseenter', pause], ['mouseleave', resume])
    }

    // ── Drag / swipe ──────────────────────────────────────────
    const onPointerDown = e => {
      dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, dragging: false }
      clearInterval(intervalRef.current)
    }

    const onPointerMove = e => {
      if (!dragRef.current.active) return
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY
      if (!dragRef.current.dragging && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        dragRef.current.dragging = true
      }
      if (!dragRef.current.dragging) return

      // Follow the front card with the pointer
      const slots = slotsRef.current
      const frontIdx = slots.indexOf(count - 1)
      const frontEl = refsArr.current[frontIdx]?.current
      if (frontEl && !cyclingRef.current) {
        const base = getSlotStyle(count - 1)
        gsap.set(frontEl, {
          x: base.x + dx,
          y: base.y + (dy * 0.2),
          rotation: dx * 0.05,
        })
      }
    }

    const onPointerUp = e => {
      if (!dragRef.current.active) return
      const dx = e.clientX - dragRef.current.startX
      dragRef.current.active = false

      const slots = slotsRef.current
      const frontIdx = slots.indexOf(count - 1)
      const frontEl = refsArr.current[frontIdx]?.current

      if (Math.abs(dx) > 80 && !cyclingRef.current) {
        // Swipe threshold met — cycle
        cycle()
      } else if (frontEl && !cyclingRef.current) {
        // Snap back
        const base = getSlotStyle(count - 1)
        gsap.to(frontEl, { x: base.x, y: base.y, rotation: 0, duration: 0.4, ease: 'back.out(1.5)' })
      }

      restartInterval()
    }

    el.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      clearInterval(intervalRef.current)
      handlers.forEach(([evt, fn]) => el.removeEventListener(evt, fn))
      el.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [count, cardDistance, verticalDistance, delay, pauseOnHover])

  return (
    <div
      ref={containerRef}
      className="card-swap-container"
      style={{ width, height, cursor: 'grab' }}
    >
      {childArray.map((child, i) =>
        cloneElement(child, {
          key: i,
          ref: el => { refsArr.current[i] = { current: el } },
        })
      )}
    </div>
  )
}
