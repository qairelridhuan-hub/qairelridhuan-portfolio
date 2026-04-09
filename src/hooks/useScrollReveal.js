import { useEffect, useRef } from 'react'

// Cards enter viewport scaled up (1.07) and shrink to 1.0 as you scroll down into them
export default function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewH = window.innerHeight

      // progress: 0 = card top at viewport bottom, ~1 = card top near viewport top
      const progress = (viewH - rect.top) / viewH

      if (progress <= 0) {
        el.style.opacity = '0'
        el.style.transform = 'scale(1.07)'
      } else if (progress < 0.6) {
        const t = progress / 0.6
        const scale = 1.07 - 0.07 * t
        el.style.opacity = String(Math.min(t * 1.4, 1).toFixed(3))
        el.style.transform = `scale(${scale.toFixed(4)})`
      } else {
        el.style.opacity = '1'
        el.style.transform = 'scale(1)'
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return ref
}
