import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onDone }) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setHide(true)
      setTimeout(onDone, 600)
    }, 1800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`loader ${hide ? 'loader-hide' : ''}`}>
      <div className="loader-text">
        <span>Q</span><span>Q</span>
      </div>
      <div className="loader-line" />
    </div>
  )
}
