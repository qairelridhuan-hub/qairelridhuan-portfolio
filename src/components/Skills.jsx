import useFadeIn from '../hooks/useFadeIn'
import Threads from './Threads'
import './Skills.css'

const tools = [
  { icon: 'fab fa-java',        name: 'Java',           category: 'LANGUAGE',        pct: 80 },
  { icon: 'fab fa-python',      name: 'Python',         category: 'LANGUAGE',        pct: 75 },
  { icon: 'fab fa-js',          name: 'JavaScript',     category: 'LANGUAGE',        pct: 85 },
  { icon: 'fab fa-html5',       name: 'HTML5',          category: 'LANGUAGE',        pct: 90 },
  { icon: 'fab fa-css3-alt',    name: 'CSS3',           category: 'LANGUAGE',        pct: 85 },
  { icon: 'fab fa-php',         name: 'PHP',            category: 'LANGUAGE',        pct: 70 },
  { icon: 'fab fa-react',       name: 'React',          category: 'FRAMEWORK',       pct: 80 },
  { icon: 'fab fa-react',       name: 'React Native',   category: 'FRAMEWORK',       pct: 75 },
  { icon: 'fas fa-mobile-alt',  name: 'Flutter',        category: 'FRAMEWORK',       pct: 70 },
  { icon: 'fas fa-fire',        name: 'Firebase',       category: 'PLATFORM',        pct: 75 },
  { icon: 'fab fa-node',        name: 'Node.js',        category: 'RUNTIME',         pct: 75 },
  { icon: 'fas fa-layer-group', name: 'Django',         category: 'FRAMEWORK',       pct: 65 },
  { icon: 'fab fa-github',      name: 'GitHub',         category: 'VERSION CONTROL', pct: 90 },
  { icon: 'fab fa-gitlab',      name: 'GitLab',         category: 'VERSION CONTROL', pct: 85 },
  { icon: 'fab fa-git-alt',     name: 'Git',            category: 'VERSION CONTROL', pct: 85 },
  { icon: 'fas fa-database',    name: 'MS SQL Server',  category: 'DATABASE',        pct: 75 },
  { icon: 'fas fa-database',    name: 'MySQL',          category: 'DATABASE',        pct: 80 },
  { icon: 'fas fa-database',    name: 'PostgreSQL',     category: 'DATABASE',        pct: 70 },
  { icon: 'fab fa-figma',       name: 'Figma',          category: 'DESIGN TOOL',     pct: 80 },
  { icon: 'fas fa-vial',        name: 'Postman',        category: 'API TOOL',        pct: 80 },
  { icon: 'fas fa-gamepad',     name: 'Unity',          category: 'GAME ENGINE',     pct: 75 },
  { icon: 'fas fa-bolt',        name: 'Vite',           category: 'BUILD TOOL',      pct: 80 },
]

const marqueeItems = [
  { icon: 'fab fa-js',          name: 'TypeScript'   },
  { icon: 'fab fa-css3-alt',    name: 'Tailwind CSS' },
  { icon: 'fas fa-layer-group', name: 'Material UI'  },
  { icon: 'fab fa-react',       name: 'React'        },
  { icon: 'fab fa-python',      name: 'Django'       },
  { icon: 'fas fa-database',    name: 'MySQL'        },
  { icon: 'fas fa-database',    name: 'PostgreSQL'   },
  { icon: 'fab fa-github',      name: 'GitHub'       },
  { icon: 'fab fa-gitlab',      name: 'GitLab'       },
  { icon: 'fab fa-figma',       name: 'Figma'        },
  { icon: 'fas fa-vial',        name: 'Postman'      },
  { icon: 'fas fa-gamepad',     name: 'Unity'        },
  { icon: 'fas fa-bolt',        name: 'Vite'         },
  { icon: 'fab fa-node',        name: 'Node.js'      },
]

function ToolCard({ icon, name, category, pct }) {
  const ref = useFadeIn()
  return (
    <div className="tool-card fade-in" ref={ref}>
      <div className="tool-card-main">
        <div className="tool-card-left">
          <i className={icon}></i>
          <div className="tool-info">
            <span className="tool-name">{name}</span>
            <span className="tool-category">{category}</span>
          </div>
        </div>
        <span className="tool-pct">{pct}%</span>
      </div>
      <div className="tool-progress-track">
        <div className="tool-progress-bar" style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="aurora-section">
      <div className="aurora-bg">
        <Threads amplitude={1} distance={0} enableMouseInteraction color={[1, 1, 1]} />
      </div>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="tools-grid">
          {tools.map(t => <ToolCard key={t.name} {...t} />)}
        </div>
      </div>
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              <i className={item.icon}></i>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
