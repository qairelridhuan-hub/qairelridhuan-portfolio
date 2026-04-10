import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import './Services.css'

const services = [
  {
    number: '01',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications built with React Native and Expo — smooth, responsive, and production-ready on both iOS and Android.',
    tags: ['React Native', 'Expo', 'Firebase', 'REST APIs', 'Figma'],
    icon: 'fas fa-mobile-alt',
    accent: '#6c63ff',
    bg: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)',
  },
  {
    number: '02',
    title: 'Web Development',
    desc: 'Modern, responsive websites and web apps built with React, JavaScript, and Firebase — focused on clean UI, performance, and real-world functionality.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Firebase'],
    icon: 'fas fa-code',
    accent: '#00b4d8',
    bg: 'linear-gradient(135deg, #001a2e 0%, #003a5c 100%)',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    desc: 'Intuitive, visually polished interfaces designed in Figma — from wireframes to high-fidelity prototypes grounded in user-centered design principles.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'User Flow', 'Design System'],
    icon: 'fas fa-pencil-ruler',
    accent: '#f72585',
    bg: 'linear-gradient(135deg, #2a0020 0%, #5a0040 100%)',
  },
  {
    number: '04',
    title: 'IT Support & Systems',
    desc: 'End-to-end IT support including PC troubleshooting, network setup, hardware maintenance, and system configuration.',
    tags: ['Network Setup', 'Hardware', 'Troubleshooting', 'Documentation', 'OneDrive'],
    icon: 'fas fa-tools',
    accent: '#2ec4b6',
    bg: 'linear-gradient(135deg, #001a18 0%, #003a35 100%)',
  },
]

function ServiceCard({ service, index, total, scrollYProgress }) {
  const n = total - 1

  const enterStart = index === 0 ? 0 : (index - 0.6) / n
  const activePoint = index === n ? 0.88 : index / n
  const exitEnd = index === n ? 1 : (index + 0.4) / n

  const springCfg = { stiffness: 60, damping: 20, mass: 1 }

  const rawY = useTransform(
    scrollYProgress,
    [Math.max(0, enterStart - 0.12), activePoint, Math.min(1, exitEnd + 0.08)],
    [90, -48, -100],
  )
  const y = useSpring(rawY, springCfg)

  const rawScale = useTransform(
    scrollYProgress,
    [Math.max(0, enterStart - 0.12), activePoint, Math.min(1, exitEnd + 0.08)],
    [0.9, 1.05, 0.95],
  )
  const scale = useSpring(rawScale, springCfg)

  const rawOpacity = useTransform(
    scrollYProgress,
    index === n
      ? [Math.max(0, enterStart - 0.15), activePoint, 1]
      : [Math.max(0, enterStart - 0.15), activePoint, exitEnd, Math.min(1, exitEnd + 0.1)],
    index === n
      ? [0, 1, 1]
      : [0, 1, 1, 0],
  )
  const opacity = useSpring(rawOpacity, { stiffness: 50, damping: 18 })

  const rawBlur = useTransform(
    scrollYProgress,
    index === n
      ? [activePoint, 1]
      : [activePoint, exitEnd, Math.min(1, exitEnd + 0.1)],
    index === n
      ? [0, 0]
      : [0, 1, 7],
  )
  const blurSpring = useSpring(rawBlur, springCfg)
  const filter = useTransform(blurSpring, v => `blur(${v}px)`)

  const rawShadow = useTransform(
    scrollYProgress,
    [Math.max(0, enterStart - 0.12), activePoint, exitEnd],
    [0.08, 0.55, 0.08],
  )
  const shadowSpring = useSpring(rawShadow, springCfg)
  const boxShadow = useTransform(
    shadowSpring,
    v => `0 ${Math.round(v * 56)}px ${Math.round(v * 90)}px rgba(0,0,0,${(v * 0.85).toFixed(2)}), 0 0 ${Math.round(v * 50)}px ${service.accent}${Math.round(v * 38).toString(16).padStart(2, '0')}`
  )

  return (
    <motion.div
      className="svc-card"
      style={{ y, scale, opacity, filter, boxShadow, zIndex: index }}
    >
      {/* Left */}
      <div className="svc-left">
        <span className="svc-number">{service.number}</span>
        <h3 className="svc-title">{service.title}</h3>
        <p className="svc-desc">{service.desc}</p>
        <div className="svc-tags">
          {service.tags.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>

      {/* Right visual */}
      <div className="svc-right" style={{ background: service.bg }}>
        <div
          className="svc-icon-wrap"
          style={{
            border: `1.5px solid ${service.accent}88`,
            boxShadow: `0 0 60px ${service.accent}44, inset 0 0 30px ${service.accent}11`,
          }}
        >
          <i className={service.icon} style={{ color: service.accent }}></i>
        </div>
        <div
          className="svc-glow"
          style={{ background: `radial-gradient(circle at 50% 50%, ${service.accent}44 0%, transparent 65%)` }}
        />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const wrapperRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="services">
      <div className="container">
        <div className="svc-header">
          <h2 className="svc-heading">Services</h2>
          <p className="svc-subheading">End-to-end digital solutions — from design to deployment.</p>
          <p className="svc-subdesc">I combine software development, mobile engineering, and IT support to deliver complete, practical digital experiences. Whether it's building a mobile app, designing a clean interface, or solving infrastructure challenges — I bring both technical depth and a focus on real-world impact.</p>
        </div>
      </div>

      {/* Scroll driver */}
      <div ref={wrapperRef} className="svc-scroll-wrapper">
        <div className="svc-sticky">
          <div className="svc-stack">
            {services.map((s, i) => (
              <ServiceCard
                key={i}
                service={s}
                index={i}
                total={services.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
