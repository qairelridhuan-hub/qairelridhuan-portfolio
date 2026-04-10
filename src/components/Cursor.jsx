import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const glowRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const glow    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const loop = () => {
      glow.current.x += (pos.current.x - glow.current.x) * 0.08
      glow.current.y += (pos.current.y - glow.current.y) * 0.08
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.current.x}px, ${glow.current.y}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef}  className="cursor-dot"  />
    </>
  )
}
