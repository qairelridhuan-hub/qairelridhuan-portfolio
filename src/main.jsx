import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'

// Smooth scroll
const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, wheelMultiplier: 1.2, touchMultiplier: 1.8 })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Expose so DomeGallery can pause/resume during drag
window.__lenis = lenis

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
