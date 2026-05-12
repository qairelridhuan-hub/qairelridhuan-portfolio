import CardSwap, { Card } from './CardSwap'
import Threads from './Threads'
import './Services.css'

const services = [
  {
    number: '01',
    title: 'UI/UX Design',
    desc: 'Figma, wireframing, prototyping, design systems, visual hierarchy, interaction design, responsive design, user-centered interfaces.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Interaction Design', 'Responsive Design'],
    icon: 'fas fa-pencil-ruler',
    accent: '#f72585',
  },
  {
    number: '02',
    title: 'Frontend Dev',
    desc: 'React Native, Expo, Flutter, Dart, TypeScript — cross-platform app development for iOS and Android.',
    tags: ['React Native', 'Expo', 'Flutter', 'Dart', 'TypeScript'],
    icon: 'fas fa-mobile-alt',
    accent: '#6c63ff',
  },
  {
    number: '03',
    title: 'Backend & Full Stack',
    desc: 'Firebase, Supabase, SQL, auth systems, real-time sync, API integration, admin dashboards, database architecture.',
    tags: ['Firebase', 'Supabase', 'SQL', 'REST APIs', 'Auth Systems', 'Admin Dashboards'],
    icon: 'fas fa-code',
    accent: '#00b4d8',
  },
  {
    number: '04',
    title: 'Cloud & AI',
    desc: 'AWS Bedrock, RAG architecture, Amazon Knowledge Base — intelligent cloud-native AI solutions.',
    tags: ['AWS Bedrock', 'RAG', 'Amazon Knowledge Base', 'AWS Cloud'],
    icon: 'fas fa-cloud',
    accent: '#ff9900',
  },
]

export default function Services() {
  return (
    <section id="services" className="aurora-section">
      <div className="aurora-bg">
        <Threads amplitude={1} distance={0} enableMouseInteraction color={[1, 1, 1]} />
      </div>
      <div className="container">
        <div className="svc-layout">
          {/* Left — description */}
          <div className="svc-left-col">
            <p className="svc-eyebrow">Core Expertise</p>
            <h2 className="svc-heading">Services that<br />make an impact</h2>
            <p className="svc-subdesc">
              From UI/UX design to full-stack development, cloud infrastructure, and AI — I deliver end-to-end digital solutions with clean design and reliable execution.
            </p>
            <ul className="svc-list">
              {services.map(s => (
                <li key={s.number} className="svc-list-item">
                  <div className="svc-list-icon"><i className={s.icon}></i></div>
                  <div className="svc-list-text">
                    <span className="svc-list-title">{s.title}</span>
                    <span className="svc-list-desc">{s.desc}</span>
                  </div>
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
