import { useState } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import Carousel from './Carousel'
import './Achievements.css'

const featured = [
  {
    icon: 'fas fa-trophy',
    place: '1st Place',
    accentColor: '#ff9900',
    event: 'VIBE 2026 Hackathon',
    organizer: 'Amazon / AWS Academy × Universiti Tun Hussein Onn Malaysia (UTHM)',
    date: 'April 2026',
    project: 'CampusSync — Smart Campus AI Assistant',
    desc: 'Built a multi-tenant university chatbot platform on Amazon Bedrock RAG architecture that bridges the gap between students and quality academic support. Deployable by any university globally.',
    highlights: [
      'Instant retrieval of learning materials tailored to specific courses',
      'Context-aware AI responses to academic queries',
      'Verified university resource integration for information accuracy',
      'Intelligent summarization of lecture notes and documents',
      'Personalized study recommendations for individual learning needs',
    ],
    stack: ['AWS Bedrock', 'RAG', 'Amazon Knowledge Base', 'AWS Cloud'],
  },
  {
    icon: 'fas fa-medal',
    place: 'Gold Medal',
    accentColor: '#f59e0b',
    event: 'Malaysia Grand Invention Expo 2023',
    organizer: 'DIGIT360 – UiTM Start-Up Company, Nusantara Training and Research (Indonesia), RR Texnology & Academica Press',
    date: '2023',
    project: 'Lifeguardian: Smart Health Bracelet for the Elderly',
    desc: 'An IoT-based wearable prototype that monitors real-time heart rate and triggers BPM alerts to improve elderly healthcare and monitoring. Awarded Gold Medal (Stage 3 – Tertiary) at an international innovation exhibition.',
    highlights: [
      'Programmed Arduino to read pulse sensor data and calculate BPM in real time',
      'LED indicators for normal, elevated, and abnormal heart rate warnings',
      'Refined accuracy using Serial Monitor testing and hardware calibration',
      'Presented at an international-level innovation exhibition',
    ],
    stack: ['Arduino IDE', 'Pulse Sensor', 'IoT', 'LED Indicators'],
  },
]

// Carousel items for certs — icon is the cert image (clickable)
function CertIcon({ img, label, onOpen }) {
  return (
    <button className="ach-cert-thumb" onClick={onOpen} title="View certificate">
      <div className="ach-cert-thumb-fallback"><i className="fas fa-image"></i></div>
      <img src={img} alt={label} className="ach-cert-thumb-img"
        onError={e => e.currentTarget.classList.add('hidden')} />
      <div className="ach-cert-thumb-overlay"><i className="fas fa-expand"></i></div>
    </button>
  )
}

function AchievementContent({ accent, place, event, date, organizer, project, highlights, stack, onViewCert }) {
  return (
    <div className="ach-ci">
      <div className="ach-ci-top">
        <span className="ach-ci-place" style={{ color: accent }}>{place}</span>
        <span className="ach-ci-date" style={{ color: accent, background: `color-mix(in srgb, ${accent} 15%, transparent)` }}>{date}</span>
      </div>
      <div className="ach-ci-event">{event}</div>
      <div className="ach-ci-organizer">{organizer}</div>
      <div className="ach-ci-project" style={{ color: accent }}><i className="fas fa-star"></i> {project}</div>
      <ul className="ach-ci-highlights">
        {highlights.map((h, i) => <li key={i} style={{ '--bcolor': accent }}>{h}</li>)}
      </ul>
      <div className="ach-ci-stack">
        {stack.map(s => <span key={s} style={{ color: accent, background: `color-mix(in srgb, ${accent} 12%, transparent)`, borderColor: `color-mix(in srgb, ${accent} 30%, transparent)` }}>{s}</span>)}
      </div>
      {onViewCert && (
        <button className="ach-view-cert-btn" onClick={onViewCert}>
          View Certificate
        </button>
      )}
    </div>
  )
}

function CertsCarousel() {
  const [lightbox, setLightbox] = useState(null)

  const certsData = [
    {
      id: 1,
      img: '/images/vibe2026.png',
      accent: '#ff9900',
      badgeIcon: 'fas fa-trophy',
    },
    {
      id: 2,
      img: '/images/cert-goldmedal.jpg',
      accent: '#f59e0b',
      badgeIcon: 'fas fa-medal',
    },
  ]

  const carouselItems = [
    {
      id: 1,
      icon: <CertIcon img="/images/vibe2026.png" label="VIBE 2026" onOpen={() => setLightbox({ ...certsData[0], img: '/images/vibe2026.png' })} />,
      custom: <AchievementContent
        accent="#ff9900"
        place="🏆 1st Place"
        event="VIBE 2026 Hackathon"
        date="April 2026"
        organizer="Amazon / AWS Academy × UTHM"
        project="CampusSync — Smart Campus AI Assistant"
        highlights={[
          'Instant retrieval of learning materials tailored to specific courses',
          'Context-aware AI responses to academic queries',
          'Verified university resource integration for information accuracy',
          'Intelligent summarization of lecture notes and documents',
          'Personalized study recommendations for individual learning needs',
        ]}
        stack={['AWS Bedrock', 'RAG', 'Amazon Knowledge Base', 'AWS Cloud']}
        onViewCert={() => window.open('/images/QAIREL QAYYUM BIN MUHAMAD RIDHUAN-AWS Generative AI Essentials-30-April-2026.pdf', '_blank')}
      />,
    },
    {
      id: 2,
      icon: <CertIcon img="/images/fyp.png" label="Gold Medal" onOpen={() => setLightbox({ ...certsData[1], img: '/images/fyp.png' })} />,
      custom: <AchievementContent
        accent="#f59e0b"
        place="🥇 Gold Medal"
        event="Malaysia Grand Invention Expo 2023"
        date="2023"
        organizer="DIGIT360 – UiTM, Nusantara Training & Research (Indonesia), RR Texnology & Academica Press"
        project="Lifeguardian — Smart Health Bracelet for the Elderly"
        highlights={[
          'Programmed Arduino to read pulse sensor data and calculate BPM in real time',
          'LED indicators for normal, elevated, and abnormal heart rate warnings',
          'Refined accuracy using Serial Monitor testing and hardware calibration',
          'Presented at an international-level innovation exhibition',
        ]}
        stack={['Arduino IDE', 'Pulse Sensor', 'IoT', 'LED Indicators']}
        onViewCert={() => window.open('/images/eCERT_GOLD_-_STAGE3-114 copy.pdf', '_blank')}
      />,
    },
  ]

  return (
    <>
      <div className="ach-carousel-wrap">
        <Carousel
          items={carouselItems}
          baseWidth={560}
          autoplay={true}
          autoplayDelay={4000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>

      {lightbox && (
        <div className="ach-lightbox" onClick={() => setLightbox(null)}>
          <div className="ach-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="ach-lightbox-close" onClick={() => setLightbox(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="ach-lightbox-fallback"><i className="fas fa-image"></i></div>
            <img src={lightbox.img} alt={lightbox.title} className="ach-lightbox-img"
              onError={e => e.currentTarget.classList.add('hidden')} />
            <p className="ach-lightbox-caption">{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  )
}

function FeaturedCard({ item }) {
  const ref = useFadeIn()
  const c = item.accentColor
  return (
    <div className="ach-featured fade-in" ref={ref}>
      <div className="ach-featured-badge">
        <i className={item.icon} style={{ color: c }}></i>
        <span style={{ color: c }}>{item.place}</span>
      </div>
      <div className="ach-featured-body">
        <div className="ach-featured-top">
          <h3 className="ach-featured-event">{item.event}</h3>
          <span className="ach-featured-date" style={{ color: c, background: `color-mix(in srgb, ${c} 15%, transparent)` }}>{item.date}</span>
        </div>
        <p className="ach-featured-organizer">{item.organizer}</p>
        <p className="ach-featured-project" style={{ color: c }}><i className="fas fa-star"></i> {item.project}</p>
        <p className="ach-featured-desc">{item.desc}</p>
        <ul className="ach-featured-highlights">
          {item.highlights.map((h, i) => <li key={i} style={{ '--bullet-color': c }}>{h}</li>)}
        </ul>
        <div className="ach-featured-stack">
          {item.stack.map(s => (
            <span key={s} style={{ color: c, background: `color-mix(in srgb, ${c} 12%, transparent)`, borderColor: `color-mix(in srgb, ${c} 30%, transparent)` }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="aurora-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <CertsCarousel />

      </div>
    </section>
  )
}
