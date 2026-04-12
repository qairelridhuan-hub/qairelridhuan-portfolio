import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    number: '01',
    category: 'Mobile & Web App',
    title: 'Spendly',
    brief: 'Financial & Work Management platform for part-time workers with real-time shift, earnings, and attendance tracking.',
    stack: ['Expo', 'React Native', 'React', 'Firebase', 'Figma'],
    accent: '#6c63ff',
    highlights: [
      'Secure authentication with role-based access (Admin & Worker)',
      'Real-time Firestore integration for hours, pay rates, and monthly summaries',
      'Responsive UI built with Expo + React Native; prototyped in Figma',
      'Admin features: shift assignment, worker management, scheduling',
      'Version control with Git/GitHub; tested via Expo CLI & Expo Go',
    ],
  },
  {
    number: '02',
    category: 'Internship Project',
    title: 'WorkPro Attendance',
    brief: 'Employee management platform with automated attendance tracking, leave management, and reporting for Aptiv Malaysia.',
    stack: ['Web Design', 'Web Development', 'Systems Analysis'],
    accent: '#00b4d8',
    highlights: [
      'Workers can clock in/out, apply for leave, and manage personal information',
      'Supervisors can review requests, manage records, and generate reports',
      'Contributed to requirements analysis, system design, and documentation',
      'Ensures efficient workforce monitoring and reduces manual processes',
    ],
  },
  {
    number: '03',
    category: 'Internship Project',
    title: 'OneDrive Migration',
    brief: 'Transitioned file storage from local servers to Microsoft OneDrive to improve data security and access across departments.',
    stack: ['Microsoft OneDrive', 'Technical Support', 'Systems Analysis'],
    accent: '#f59e0b',
    highlights: [
      'Gathered user requirements and analysed existing storage workflows',
      'Tested the migration solution and collected operational data',
      'Supported user training across departments',
      'Improved storage efficiency, access control, and scalability',
    ],
  },
  {
    number: '04',
    category: 'System Design',
    title: 'Greenhouse System',
    brief: 'Digital management system applying software engineering principles to information architecture and workflow documentation.',
    stack: ['System Architecture', 'Technical Documentation', 'Google Drive'],
    accent: '#22c55e',
    highlights: [
      'Designed scalable folder structure and data architecture',
      'Translated operational processes into a system architecture diagram',
      'Defined role-based access control',
      'Produced technical documentation covering workflow modelling and system design',
    ],
  },
  {
    number: '05',
    category: 'IoT · 🏅 Gold Medal',
    title: 'Smart Health Bracelet',
    brief: 'Wearable IoT prototype that detects real-time heart rate with BPM alerts — Malaysian Grand Invention Expo 2023.',
    stack: ['Arduino IDE', 'Pulse Sensor', 'LED Indicators'],
    accent: '#f72585',
    highlights: [
      'Programmed Arduino to read pulse sensor data and calculate BPM',
      'LED indicators for normal, elevated, and abnormal heart rate warnings',
      'Refined accuracy using Serial Monitor testing',
      'Stable hardware assembly with proper sensor placement',
    ],
  },
]

function ProjectModal({ project, onClose }) {
  return (
    <div className="proj-modal-overlay" onClick={onClose}>
      <div className="proj-modal" onClick={e => e.stopPropagation()}>
        <button className="proj-modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <span className="proj-modal-category">{project.category}</span>
        <h3 className="proj-modal-title">{project.title}</h3>
        <p className="proj-modal-desc">{project.brief}</p>
        <ul className="proj-modal-highlights">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
        <div className="proj-modal-stack">
          {project.stack.map(s => <span key={s}>{s}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="proj-hint">Click any card to view details</p>
      </div>

      <div className="proj-scroll-outer">
        <div className="proj-track">
          {projects.map((p, i) => (
            <div
              key={i}
              className="proj-card"
              onClick={() => setSelected(p)}
            >
              <div className="proj-card-top">
                <span className="proj-num">{p.number}</span>
                <span className="proj-category">{p.category}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-brief">{p.brief}</p>
              <div className="proj-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <div className="proj-card-footer">
                <span className="proj-view">View Details <i className="fas fa-arrow-right"></i></span>
              </div>
              <div className="proj-accent-bar" style={{ background: p.accent }} />
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
