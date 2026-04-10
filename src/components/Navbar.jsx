import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const links = ['about','skills','education','experience','projects','services','contact']

const MAX_SCALE  = 1.55
const MID_SCALE  = 1.25
const NEAR_SCALE = 1.08

function getScale(hoveredIdx, idx) {
  if (hoveredIdx === null) return 1
  const dist = Math.abs(hoveredIdx - idx)
  if (dist === 0) return MAX_SCALE
  if (dist === 1) return MID_SCALE
  if (dist === 2) return NEAR_SCALE
  return 1
}

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [active, setActive]   = useState('')
  const [hoveredIdx, setHovered] = useState(null)
  const [visible, setVisible] = useState(true)

  const hideTimer   = useRef(null)
  const scrollTimer = useRef(null)

  // Show navbar and reset the hide timer
  const show = () => {
    setVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setVisible(false), 3000)
  }

  // Hide immediately when scrolling starts; show when it stops
  useEffect(() => {
    const onScroll = () => {
      setVisible(false)
      clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(() => {
        // scroll stopped — wait for cursor move to show again
      }, 150)
    }

    const onMouseMove = () => show()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove)

    // Initial hide timer
    hideTimer.current = setTimeout(() => setVisible(false), 3000)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      clearTimeout(hideTimer.current)
      clearTimeout(scrollTimer.current)
    }
  }, [])

  // Active section tracking
  useEffect(() => {
    const sections = links.map(id => document.getElementById(id)).filter(Boolean)
    const pick = () => {
      if (window.scrollY < 80) { setActive(''); return }
      let current = ''
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= window.innerHeight * 0.45) current = s.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', pick, { passive: true })
    pick()
    return () => window.removeEventListener('scroll', pick)
  }, [])

  const label = id => id.charAt(0).toUpperCase() + id.slice(1)

  return (
    <nav
      id="navbar"
      className={visible ? 'nav-visible' : 'nav-hidden'}
      onMouseEnter={e => { e.currentTarget.classList.add('nav-hover'); show() }}
      onMouseLeave={e => e.currentTarget.classList.remove('nav-hover')}
    >
      <div className="nav-container">
        <ul className="nav-links" onMouseLeave={() => setHovered(null)}>
          {links.map((l, i) => {
            const scale = getScale(hoveredIdx, i)
            return (
              <li
                key={l}
                onMouseEnter={() => setHovered(i)}
                style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center' }}
              >
                <a
                  href={`#${l}`}
                  className={[
                    l === 'contact' ? 'btn-nav' : '',
                    active === l && l !== 'contact' ? 'nav-active' : '',
                    active === l && l === 'contact' ? 'btn-nav-active' : '',
                  ].join(' ').trim()}
                >
                  {label(l)}
                </a>
              </li>
            )
          })}
        </ul>
        <button className="hamburger" onClick={() => setOpen(o => !o)}>
          <i className={`fas fa-${open ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <a
              key={l}
              href={`#${l}`}
              className={active === l ? 'nav-active' : ''}
              onClick={() => setOpen(false)}
            >
              {label(l)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
