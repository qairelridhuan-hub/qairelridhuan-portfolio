import './Education.css'

const items = [
  {
    current: true,
    dotLogo: '/images/logo-uthm.jpg',
    title: 'Degree in Computer Science (Software Engineering)',
    school: 'University Tun Hussein Onn Malaysia (UTHM)',
    period: '2024 – Present',
    points: [
      'Specialising in Software Engineering with focus on mobile and web development',
      'Final Year Project: Spendly – Financial & Work Management App',
    ],
  },
  {
    dotLogo: '/images/logo-uthm.jpg',
    title: 'Diploma in Information Technology',
    school: 'University Tun Hussein Onn Malaysia (UTHM)',
    period: '2021 – 2024',
    points: [
      'Achieved 4.0 GPA in first semester; 3.7 in second semester',
      'Maintained above 3.5 GPA every semester',
      'Member of Persatuan Pelajar Diploma (PPD)',
    ],
  },
  {
    dotLogo: '/images/SMK-Panji-Alam-Trg-Logo-300x300.jpg',
    title: 'SMK Panji Alam',
    period: '2019 – 2021',
    points: [
      'Achieved 7As in SPM (2021)',
      'School Prefect & Cooperative Prefect',
      'Leader in Computer Club',
      'Vice Section Leader — Malaysian Red Crescent',
    ],
  },
  {
    dotLogo: '/images/220x260_smaszal_logo.jpg',
    title: 'SMA Sultan Zainal Abidin Ladang',
    period: '2016 – 2018',
    points: [
      'Achieved 6As in PT3 (2018)',
      'Completed lower secondary education with a strong academic foundation',
      'Active participation in school co-curricular activities',
    ],
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="edu-stack">
          {items.map((item, i) => (
            <div
              key={i}
              className={`edu-card ${item.current ? 'edu-card--current' : ''}`}
              style={{ top: `${80 + i * 32}px` }}
            >
              <div className="edu-card-top">
                <div className="edu-logo-wrap">
                  <img src={item.dotLogo} alt="logo" className="edu-logo" onError={e => e.currentTarget.style.display = 'none'} />
                </div>
                <div className="edu-meta">
                  <h3 className="edu-title">{item.title}</h3>
                  {item.school && <p className="edu-school">{item.school}</p>}
                  <p className="edu-period"><i className="fas fa-calendar"></i> {item.period}</p>
                </div>
                {item.current && <span className="edu-badge">Current</span>}
              </div>
              <ul className="edu-points">
                {item.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
