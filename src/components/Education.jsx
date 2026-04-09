import useScrollReveal from '../hooks/useScrollReveal'
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
    popup: {
      image: '/images/edu-degree.png',
      fallbackIcon: 'fas fa-graduation-cap',
      fallbackGradient: 'linear-gradient(135deg, #6c63ff 0%, #4f46e5 100%)',
      caption: 'UTHM — Degree Programme',
      desc: "Pursuing a Bachelor's degree in Computer Science (Software Engineering), specialising in mobile and web application development.",
    },
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
    popup: {
      image: '/images/pagoh.jpeg',
      imagePosition: 'center 78%',
      fallbackIcon: 'fas fa-university',
      fallbackGradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      caption: 'UTHM — Diploma Programme',
      desc: 'Completed Diploma in Information Technology with consistently high GPA, building a strong foundation in programming and IT systems.',
    },
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
      'Leader & Presenter — Innovation Club Project',
    ],
    popup: {
      image: '/images/smk panji alam.png',
      imagePosition: 'center 50%',
      fallbackIcon: 'fas fa-school',
      fallbackGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      caption: 'SMK Panji Alam',
      desc: 'Achieved 7As in SPM. Actively led clubs and co-curricular activities, demonstrating leadership and community involvement.',
    },
  },
  {
    dotLogo: '/images/220x260_smaszal_logo.jpg',
    title: 'SMA Sultan Zainal Abidin Ladang',
    period: '2016 – 2018',
    points: [
      'Achieved 6As in PT3 (2018)',
      'Completed lower secondary education with a strong academic foundation',
      'Developed early interest in science and technology subjects',
      'Active participation in school co-curricular activities',
    ],
    popup: {
      image: '/images/smaszal.JPG',
      imagePosition: 'center 40%',
      fallbackIcon: 'fas fa-book-open',
      fallbackGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      caption: 'SMA Sultan Zainal Abidin Ladang',
      desc: 'Completed lower secondary education with 6As in PT3, forming a solid academic base for future studies.',
    },
  },
]

function EduPopup({ popup }) {
  return (
    <div className="edu-popup">
      <div className="edu-popup-img-wrap" style={{ background: popup.fallbackGradient }}>
        <div className="edu-popup-img-fallback">
          <i className={popup.fallbackIcon}></i>
        </div>
        <img
          src={popup.image}
          alt={popup.caption}
          className="edu-popup-img"
          style={popup.imagePosition ? { objectPosition: popup.imagePosition } : undefined}
          onError={e => e.currentTarget.classList.add('hidden')}
        />
      </div>
      <div className="edu-popup-body">
        <p className="edu-popup-caption">{popup.caption}</p>
        <p className="edu-popup-desc">{popup.desc}</p>
      </div>
    </div>
  )
}

function TimelineItem({ item }) {
  const ref = useScrollReveal()
  return (
    <div className="timeline-item">
      <div className="timeline-dot">
        {item.dotLogo && (
          <img src={item.dotLogo} alt="logo" className="timeline-dot-logo" />
        )}
      </div>
      <div className={`timeline-card scroll-reveal ${item.current ? 'current' : ''}`} ref={ref}>
        {item.current && <span className="timeline-badge">Current</span>}
        <h3>{item.title}</h3>
        {item.school && <h4>{item.school}</h4>}
        <p className="timeline-meta"><i className="fas fa-calendar"></i> {item.period}</p>
        <ul>
          {item.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
      {item.popup && <EduPopup popup={item.popup} />}
    </div>
  )
}

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {items.map((item, i) => <TimelineItem key={i} item={item} />)}
        </div>
      </div>
    </section>
  )
}
