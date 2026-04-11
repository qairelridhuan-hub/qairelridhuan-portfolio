import {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  cloneElement,
  Children,
} from 'react'
import gsap from 'gsap'
import './CardSwap.css'

export const Card = forwardRef(({ children, style, className = '' }, ref) => {
  return (
    <div ref={ref} className={`card ${className}`} style={style}>
      {children}
    </div>
  )
})
Card.displayName = 'Card'

function makeSlots(count) {
  return Array.from({ length: count }, (_, i) => i)
}

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
  const refs = useRef([])
  const containerRef = useRef(null)
  const tlRef = useRef(null)
  const intervalRef = useRef(null)
  const slotsRef = useRef(makeSlots(Children.count(children)))

  const childArray = Children.toArray(children)
  const count = childArray.length

  refs.current = Array.from({ length: count }, (_, i) => refs.current[i] || { current: null })

  function getSlotStyle(slot, total, cDist, vDist) {
    const offset = total - 1 - slot
    return {
      x: offset * -cDist,
      y: offset * vDist,
      scale: 1 - offset * 0.06,
      zIndex: slot,
    }
  }

  function animateToSlot(el, slot, total, cDist, vDist) {
    const { x, y, scale, zIndex } = getSlotStyle(slot, total, cDist, vDist)
    gsap.to(el, {
      x,
      y,
      scale,
      zIndex,
      duration: 0.8,
      ease: easing,
    })
  }

  function cycle() {
    const slots = slotsRef.current
    const top = slots.indexOf(count - 1)
    const topEl = refs.current[top]?.current
    if (!topEl) return

    const tl = gsap.timeline()
    tlRef.current = tl

    tl.to(topEl, {
      x: '+=120',
      y: '-=30',
      rotation: 8,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(topEl, { x: -200, y: 80, rotation: -6, opacity: 0, zIndex: 0 })
        const newSlots = slots.map(s => (s === 0 ? count - 1 : s - 1))
        newSlots[top] = 0
        slotsRef.current = newSlots
        refs.current.forEach((r, i) => {
          if (r.current) animateToSlot(r.current, newSlots[i], count, cardDistance, verticalDistance)
        })
        gsap.to(topEl, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      },
    })
  }

  useEffect(() => {
    const slots = slotsRef.current
    refs.current.forEach((r, i) => {
      if (!r.current) return
      const { x, y, scale, zIndex } = getSlotStyle(slots[i], count, cardDistance, verticalDistance)
      gsap.set(r.current, { x, y, scale, zIndex, opacity: 1 })
    })

    intervalRef.current = setInterval(cycle, delay)

    if (pauseOnHover && containerRef.current) {
      const el = containerRef.current
      const pause = () => clearInterval(intervalRef.current)
      const resume = () => { intervalRef.current = setInterval(cycle, delay) }
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
        cloneElement(child, { ref: el => { refs.current[i] = { current: el } } })
      )}
    </div>
  )
}
