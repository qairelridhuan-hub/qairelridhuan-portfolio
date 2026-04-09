import useScrollReveal from '../hooks/useScrollReveal'
import Threads from './Threads'
import './Experience.css'

const jobs = [
  {
    year: '2023',
    dotLogo: '/images/Aptiv.webp',
    tag: 'IT · Internship',
    title: 'IT Coordinator (Intern)',
    company: 'Aptiv (Malaysia) Sdn Bhd',
    date: '30 July 2023 – 11 January 2024',
    desc: 'Resolved diverse PC issues including slow RAM, motherboard diagnostics, and drive upgrades. Deployed antivirus software on Windows manufacturing PCs and managed network cable installations across multiple factory departments.',
    images: ['/images/exp-aptiv1.jpg', '/images/exp-aptiv2.jpg'],
    points: [
      'Resolved diverse PC issues including slow RAM, motherboard diagnostics, and drive upgrades.',
      'Deployed antivirus software on Windows manufacturing PCs using command-line tools.',
      'Managed network cable installations across multiple factory departments and sections.',
    ],
  },
  {
    year: '2024',
    dotLogo: '/images/baskbear.png',
    tag: 'F&B · Part-time',
    title: 'Barista (Bearista)',
    company: 'Bask Bear and Coffee — KTCC Mall',
    desc: 'Prepared a diverse range of coffee beverages and specialty drinks. Managed cash register transactions and maintained a clean, sanitized work environment.',
    images: ['/images/exp-bask1.jpg', '/images/exp-bask2.jpg'],
    points: [
      'Prepared a diverse range of coffee beverages and specialty drinks.',
      'Crafted sandwiches with attention to detail and customer preferences.',
      'Managed cash register transactions and end-of-shift balancing.',
      'Maintained a clean and sanitized work environment.',
    ],
  },
  {
    year: '2025',
    dotLogo: '/images/jollygood.jpg',
    tag: 'F&B · Part-time',
    title: 'Barista',
    company: 'Jolly Good Cafe, Kuala Terengganu',
    desc: 'Prepared hot and iced beverages including specialty coffees. Managed daily operations: order taking, food prep, customer service, and accurate payment handling.',
    images: ['/images/exp-jolly1.jpg', '/images/exp-jolly2.jpg'],
    points: [
      'Prepared hot and iced beverages including specialty coffees and custom orders.',
      'Managed daily operations: order taking, food prep, and customer service.',
      'Handled cash and digital payments with accurate end-of-shift balances.',
      'Assisted with inventory, restocking, and workstation organisation.',
    ],
  },
]

function ExpCard({ job }) {
  const ref = useScrollReveal()
  return (
    <div className="exp-row">
      {/* Year marker */}
      <div className="exp-year-col">
        <div className="exp-year-dot">
          {job.dotLogo
            ? <img src={job.dotLogo} alt={job.company} className="exp-dot-logo" />
            : <i className="fas fa-snowflake"></i>
          }
        </div>
        <span className="exp-year-label">{job.year}</span>
      </div>

      {/* Card */}
      <div className="exp-card scroll-reveal" ref={ref}>
        <div className="exp-card-header">
          <span className="exp-tag">{job.tag}</span>
          <h3>{job.title}</h3>
          <h4>{job.company}</h4>
          {job.date && (
            <p className="exp-date"><i className="fas fa-calendar"></i> {job.date}</p>
          )}
          <p className="exp-desc">{job.desc}</p>
        </div>

        {/* Image pair */}
        <div className="exp-images">
          {job.images.map((src, i) => (
            <div key={i} className="exp-img-wrap">
              <div className="exp-img-fallback">
                <i className="fas fa-image"></i>
              </div>
              <img
                src={src}
                alt={job.title}
                className="exp-img"
                onError={e => e.currentTarget.classList.add('hidden')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="aurora-section">
      <div className="aurora-bg">
        <Threads amplitude={1} distance={0} enableMouseInteraction color={[1, 1, 1]} />
      </div>
      <div className="container">
        <h2 className="section-title">Working Experience</h2>
        <div className="exp-timeline">
          {/* Vertical line */}
          <div className="exp-line"></div>
          {jobs.map((j, i) => <ExpCard key={i} job={j} />)}
        </div>
      </div>
    </section>
  )
}
