import { useState, useEffect } from 'react'

export default function useTypewriter(words, typeSpeed = 90, deleteSpeed = 55, pauseMs = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (phase === 'typing') {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseMs)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed)
      } else {
        setWordIdx((wordIdx + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [display, phase, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])

  return display
}
