import { useState } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Projects.css'
import CircularGallery from './CircularGallery'

const projects = [
  {
    category: 'Mobile & Web App',
    title: 'Spendly',
    desc: 'Financial & Work Management platform for part-time workers with real-time shift, earnings, and attendance tracking across mobile and web.',
    stack: ['Expo', 'React Native', 'React', 'Firebase', 'Figma'],
    highlights: [
      'Secure authentication with role-based access (Admin & Worker)',
      'Real-time Firestore integration for hours, pay rates, and monthly summaries',
      'Responsive UI built with Expo + React Native; prototyped in Figma',
      'Admin features: shift assignment, worker management, scheduling',
      'Version control with Git/GitHub; tested via Expo CLI & Expo Go',
    ],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
  },
  {
    category: 'Internship Project',
    title: 'WorkPro Attendance System',
    desc: 'Employee management platform with automated attendance tracking, leave management, and reporting for Aptiv Malaysia.',
    stack: ['Web Design', 'Web Development', 'Systems Analysis'],
    highlights: [
      'Workers can clock in/out, apply for leave, and manage personal information',
      'Supervisors can review requests, manage records, and generate reports',
      'Contributed to requirements analysis, system design, and documentation',
      'Ensures efficient workforce monitoring and reduces manual processes',
    ],
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b00 100%)',
  },
  {
    category: 'Internship Project',
    title: 'OneDrive Migration & Document Management',
    desc: 'Transitioned file storage from local servers to Microsoft OneDrive to improve data security and access across departments.',
    stack: ['Microsoft OneDrive', 'Technical Support', 'Systems Analysis'],
    highlights: [
      'Gathered user requirements and analysed existing storage workflows',
      'Tested the migration solution and collected operational data',
      'Supported user training across departments',
      'Improved storage efficiency, access control, and scalability',
    ],
    gradient: 'linear-gradient(135deg, #0d1117 0%, #003366 100%)',
  },
  {
    category: 'System Design',
    title: 'Greenhouse Digital Management System',
    desc: 'Structured and documented a digital management system applying software engineering principles to information architecture and workflow.',
    stack: ['System Architecture', 'Technical Documentation', 'Google Drive'],
    highlights: [
      'Designed scalable folder structure and data architecture (Google Drive + Priva Files)',
      'Translated operational processes into a system architecture diagram',
      'Defined role-based access control — Admin manages permissions, staff access specific modules',
      'Produced technical documentation covering workflow modelling and system design',
    ],
    gradient: 'linear-gradient(135deg, #0d1a0d 0%, #1a3a1a 100%)',
  },
  {
    category: 'IoT · 🏅 Gold Medal',
    title: 'Smart Health Bracelet',
    desc: 'Wearable IoT prototype that detects real-time heart rate with BPM alerts and LED indicators — Malaysian Grand Invention Expo 2023.',
    stack: ['Arduino IDE', 'Pulse Sensor', 'LED Indicators'],
    highlights: [
      'Programmed Arduino to read pulse sensor data and calculate BPM',
      'LED indicators for normal, elevated, and abnormal heart rate warnings',
      'Refined accuracy using Serial Monitor testing',
      'Stable hardware assembly with proper sensor placement',
    ],
    gradient: 'linear-gradient(135deg, #1a0d0d 0%, #3a1a1a 100%)',
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
        <p className="proj-modal-desc">{project.desc}</p>
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

  const projectItems = projects.map((p, i) => ({
    image: `https://picsum.photos/seed/${i + 25}/800/600?grayscale`,
    text: p.title
  }));

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery 
            items={projectItems}
            bend={0} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.05}
            scrollSpeed={2}
            onItemClick={(idx) => setSelected(projects[idx])}
          />
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
