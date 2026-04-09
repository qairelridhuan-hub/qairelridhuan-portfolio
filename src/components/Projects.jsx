import useFadeIn from '../hooks/useFadeIn'
import './Projects.css'

const projects = [
  {
    icon: 'fas fa-wallet',
    badge: { label: 'FYP 2026', cls: 'fyp' },
    title: 'Spendly',
    subtitle: 'Financial & Work Management App',
    desc: 'A cross-platform mobile application designed for part-time workers to manage shifts, earnings, and attendance with real-time synchronisation.',
    highlights: [
      'Secure authentication with role-based access (Admin & Worker)',
      'Real-time Firestore integration for hours, pay rates, and monthly summaries',
      'Responsive UI built with Expo + React Native; prototyped in Figma',
      'Admin features: shift assignment, worker management, scheduling',
      'Version control with Git/GitHub; tested via Expo CLI & Expo Go',
    ],
    stack: ['Expo','React Native','JavaScript ES6','Firebase','Figma','GitHub'],
    featured: true,
  },
  {
    icon: 'fas fa-heartbeat',
    badge: { label: '🏅 Gold Medal', cls: 'gold' },
    title: 'Smart Health Bracelet',
    subtitle: 'IoT Prototype — Malaysian Grand Invention Expo 2023',
    desc: 'A wearable IoT prototype that detects and displays real-time heart rate with BPM alerts and LED indicators for health monitoring.',
    highlights: [
      'Programmed Arduino to read pulse sensor data and calculate BPM',
      'LED indicators for normal, elevated, and abnormal heart rate warnings',
      'Refined accuracy using Serial Monitor testing',
      'Stable hardware assembly with proper sensor placement',
    ],
    stack: ['Arduino IDE','Pulse Sensor','LED Indicators','Breadboard','Serial Monitor'],
  },
]

function ProjectCard({ project }) {
  const ref = useFadeIn()
  return (
    <div className={`project-card fade-in ${project.featured ? 'featured-project' : ''}`} ref={ref}>
      <div className="project-header">
        <div className="project-icon"><i className={project.icon}></i></div>
        <div>
          <span className={`project-badge ${project.badge.cls}`}>{project.badge.label}</span>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
      </div>
      <p className="project-desc">{project.desc}</p>
      <ul className="project-highlights">
        {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <div className="project-stack">
        {project.stack.map(s => <span key={s}>{s}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="glass-panel">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
