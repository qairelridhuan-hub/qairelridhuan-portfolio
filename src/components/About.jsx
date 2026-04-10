import { useRef } from 'react'
import useCounter from '../hooks/useCounter'
import useFadeIn from '../hooks/useFadeIn'
import './About.css'

function Stat({ target, suffix, label }) {
  const ref = useRef(null)
  const count = useCounter(target, ref)
  return (
    <div className="about-stat" ref={ref}>
      <span className="about-stat-num">{count}{suffix}</span>
      <span className="about-stat-label">{label}</span>
    </div>
  )
}

export default function About() {
  const ref = useFadeIn()
  return (
    <section id="about">
      <div className="container">
        <div className="about-card fade-in" ref={ref}>

          {/* content */}
          <div className="about-content">
            <h2 className="about-heading">
              About <span className="about-heading-accent">Me</span>
            </h2>
            <p className="about-tagline">Blending logic, code, and real-world problem solving.</p>

            <p className="about-bio">
              I'm a <strong>Software Engineering undergraduate at UTHM</strong> with hands-on experience building cross-platform mobile apps, managing IT infrastructure, and developing real-time systems. I enjoy turning complex problems into clean, practical solutions.
            </p>
            <p className="about-bio">
              Currently building <strong>Spendly</strong> — a shift & earnings management app — as my Final Year Project using Expo, React Native, and Firebase. I also bring IT support experience from my internship at <strong>Aptiv</strong>, covering network setup, hardware maintenance, and system configuration.
            </p>

            <div className="about-stats">
              <Stat target={22} suffix="+" label="Technologies" />
              <Stat target={4}  suffix=""  label="Projects" />
              <Stat target={1}  suffix=""  label="Internship" />
              <Stat target={3}  suffix="+" label="Years Learning" />
            </div>

            <a href="/Qairel_Qayyum.pdf" download className="about-cv-btn" target="_blank" rel="noreferrer">
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
