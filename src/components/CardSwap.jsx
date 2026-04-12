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
  // slotsRef[i] = which slot card i occupies. slot count-1 = front, 0 = back.
  const slotsRef = useRef([])

  const childArray = Children.toArray(children)
  const count = childArray.length

  // Ensure refs array is sized
  refsArr.current = Array.from({ length: count }, (_, i) => refsArr.current[i] || { current: null })

  function getSlotStyle(slot) {
    const offset = count - 1 - slot   // 0 = front, increases toward back
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
    const slots = slotsRef.current
    // Find front card (slot = count-1)
    const frontIdx = slots.indexOf(count - 1)
    const frontEl = refsArr.current[frontIdx]?.current
    if (!frontEl) return

    // Fly front card out
    gsap.to(frontEl, {
      x: '+=140',
      y: '-=20',
      rotation: 7,
      opacity: 0,
      duration: 0.38,
      ease: 'power2.in',
      onComplete: () => {
        // New slots: front card → slot 0 (back); everyone else +1 (move toward front)
        const newSlots = slots.map((s, i) => i === frontIdx ? 0 : s + 1)
        slotsRef.current = newSlots

        // Snap front card to back position (off-screen left)
        const backStyle = getSlotStyle(0)
        gsap.set(frontEl, { ...backStyle, rotation: 0, opacity: 0 })

        // Animate all cards to their new slot positions
        refsArr.current.forEach((r, i) => {
          if (r.current && i !== frontIdx) animateToSlot(r.current, newSlots[i])
        })

        // Fade front card back in at the back
        gsap.to(frontEl, { opacity: 1, duration: 0.35, delay: 0.15 })
      },
    })
  }

  useEffect(() => {
    // Initial slots: card 0 → front (slot count-1), card 1 → count-2, ..., card count-1 → 0 (back)
    // So order on screen front→back: card0, card1, card2, card3
    const initialSlots = Array.from({ length: count }, (_, i) => count - 1 - i)
    slotsRef.current = initialSlots

    refsArr.current.forEach((r, i) => {
      if (!r.current) return
      const { x, y, scale, zIndex } = getSlotStyle(initialSlots[i])
      gsap.set(r.current, { x, y, scale, zIndex, opacity: 1, rotation: 0 })
    })

    function startInterval() {
      intervalRef.current = setInterval(cycle, delay)
    }

    startInterval()

    if (pauseOnHover && containerRef.current) {
      const el = containerRef.current
      const pause = () => clearInterval(intervalRef.current)
      const resume = () => startInterval()
      el.addEventListener('mouseenter', pause)
      el.addEventListener('mouseleave', resume)
      return () => {
        clearInterval(intervalRef.current)
        el.removeEventListener('mouseenter', pause)
        el.removeEventListener('mouseleave', resume)
      }
    }

    return () => clearInterval(intervalRef.current)
  }, [count, cardDistance, verticalDistance, delay, pauseOnHover])

  return (
    <div
      ref={containerRef}
      className="card-swap-container"
      style={{ width, height }}
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
