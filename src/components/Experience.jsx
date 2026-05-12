import useScrollReveal from '../hooks/useScrollReveal'
import './Experience.css'

const jobs = [
  {
    year: '2023',
    dotLogo: '/images/versigent_logo.jpeg',
    tag: 'IT · Internship',
    title: 'IT Analyst Intern',
    company: 'Versigent',
    date: 'Jul 2023 – Jan 2024 · 7 mos · Kuala Terengganu, Terengganu, Malaysia · On-site',
    desc: 'Delivered IT support during internship training by diagnosing and resolving hardware issues, including RAM performance optimization, motherboard troubleshooting, and storage upgrades.',
    images: ['/images/exp-aptiv1.jpg'],
    points: [
      'Delivered IT support during internship training by diagnosing and resolving hardware issues.',
      'Performed RAM performance optimization, motherboard troubleshooting, and storage upgrades.',
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

        {job.images && (
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
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="aurora-section">
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
