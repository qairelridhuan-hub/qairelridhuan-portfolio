import CardSwap, { Card } from './CardSwap'
import './Services.css'

const services = [
  {
    number: '01',
    title: 'Mobile App Development',
    desc: 'Cross-platform apps built with React Native & Expo.',
    tags: ['React Native', 'Expo', 'Firebase', 'REST APIs'],
    icon: 'fas fa-mobile-alt',
    accent: '#6c63ff',
  },
  {
    number: '02',
    title: 'Web Development',
    desc: 'Modern responsive web apps with React & Firebase.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    icon: 'fas fa-code',
    accent: '#00b4d8',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    desc: 'Clean, intuitive interfaces designed in Figma.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'User Flow'],
    icon: 'fas fa-pencil-ruler',
    accent: '#f72585',
  },
  {
    number: '04',
    title: 'IT Support & Systems',
    desc: 'PC troubleshooting, network setup & hardware.',
    tags: ['Network Setup', 'Hardware', 'Troubleshooting'],
    icon: 'fas fa-tools',
    accent: '#2ec4b6',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="svc-layout">
          {/* Left — description */}
          <div className="svc-left-col">
            <p className="svc-eyebrow">What I Offer</p>
            <h2 className="svc-heading">Services that<br />make an impact</h2>
            <p className="svc-subdesc">
              From mobile apps to web platforms and IT infrastructure — I deliver end-to-end digital solutions with clean design and reliable execution.
            </p>
            <ul className="svc-list">
              {services.map(s => (
                <li key={s.number} className="svc-list-item">
                  <i className={s.icon} style={{ color: s.accent }}></i>
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — card stack */}
          <div className="svc-right-col">
            <CardSwap
              cardDistance={55}
              verticalDistance={65}
              delay={4000}
              pauseOnHover
              width={460}
              height={300}
            >
              {services.map((s, i) => (
                <Card key={i}>
                  <div className="svc-card-inner">
                    <div className="svc-card-top">
                      <span className="svc-card-num">{s.number}</span>
                      <i className={`${s.icon} svc-card-icon`} style={{ color: s.accent }}></i>
                    </div>
                    <h3 className="svc-card-title">{s.title}</h3>
                    <p className="svc-card-desc">{s.desc}</p>
                    <div className="svc-tags">
                      {s.tags.map(t => (
                        <span key={t} className="svc-tag">{t}</span>
                      ))}
                    </div>
                    <div
                      className="svc-card-glow"
                      style={{ background: `radial-gradient(circle at 90% 10%, ${s.accent}22 0%, transparent 60%)` }}
                    />
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}
