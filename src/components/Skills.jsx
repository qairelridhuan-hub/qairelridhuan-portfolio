import Threads from './Threads'
import DomeGallery from './DomeGallery'
import './Skills.css'

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skills = [
  { logo: `${D}/java/java-original.svg`,              label: 'Java',          category: 'Language',        pct: 80, desc: 'Used for backend development and Android apps. Built REST APIs, data structures coursework, and OOP-heavy projects with Java.' },
  { logo: `${D}/python/python-original.svg`,          label: 'Python',        category: 'Language',        pct: 75, desc: 'Used for scripting, data analysis, and backend services. Applied in ML experiments, automation scripts, and Django web apps.' },
  { logo: `${D}/javascript/javascript-original.svg`,  label: 'JavaScript',    category: 'Language',        pct: 85, desc: 'Primary language for front-end and full-stack development. Used across React, Node.js, and browser APIs in most of my projects.' },
  { logo: `${D}/html5/html5-original.svg`,            label: 'HTML5',         category: 'Language',        pct: 90, desc: 'Foundation of all my web projects. Use semantic HTML5 for accessible, SEO-friendly page structure.' },
  { logo: `${D}/css3/css3-original.svg`,              label: 'CSS3',          category: 'Language',        pct: 85, desc: 'Used for layouts, animations, and responsive design. Proficient with Flexbox, Grid, custom properties, and keyframe animations.' },
  { logo: `${D}/php/php-original.svg`,                label: 'PHP',           category: 'Language',        pct: 70, desc: 'Used for server-side scripting in web apps. Built CRUD applications and integrated with MySQL databases using PHP.' },
  { logo: `${D}/react/react-original.svg`,            label: 'React',         category: 'Framework',       pct: 80, desc: 'Main framework for building web UIs. Used hooks, context, and component-driven architecture across multiple portfolio and client projects.' },
  { logo: `${D}/react/react-original.svg`,            label: 'React Native',  category: 'Framework',       pct: 75, desc: 'Built cross-platform mobile apps with shared codebase. Used Expo, navigation libraries, and native device APIs.' },
  { logo: `${D}/flutter/flutter-original.svg`,        label: 'Flutter',       category: 'Framework',       pct: 70, desc: 'Developed mobile apps in Dart with Flutter. Used for projects requiring rich UI widgets and smooth cross-platform performance.' },
  { logo: `${D}/firebase/firebase-original.svg`,      label: 'Firebase',      category: 'Platform',        pct: 75, desc: 'Used for auth, Firestore database, and hosting in mobile and web apps. Integrated real-time listeners and Firebase Storage.' },
  { logo: `${D}/nodejs/nodejs-original.svg`,          label: 'Node.js',       category: 'Runtime',         pct: 75, desc: 'Built RESTful APIs and server-side logic with Node.js and Express. Used for backend services in full-stack projects.' },
  { logo: `${D}/django/django-plain.svg`,             label: 'Django',        category: 'Framework',       pct: 65, desc: 'Used for rapid backend development in Python. Built MVC web apps with Django ORM, authentication, and admin panel.' },
  { logo: `${D}/github/github-original.svg`,          label: 'GitHub',        category: 'Version Control', pct: 90, desc: 'Daily driver for source control and collaboration. Used for PRs, branching strategies, GitHub Actions CI/CD, and project management.' },
  { logo: `${D}/gitlab/gitlab-original.svg`,          label: 'GitLab',        category: 'Version Control', pct: 85, desc: 'Used in team projects for CI/CD pipelines, merge requests, and issue tracking. Set up automated build and deploy workflows.' },
  { logo: `${D}/git/git-original.svg`,                label: 'Git',           category: 'Version Control', pct: 85, desc: 'Core tool for version control. Comfortable with branching, rebasing, resolving conflicts, and maintaining clean commit history.' },
  { logo: `${D}/microsoftsqlserver/microsoftsqlserver-original.svg`, label: 'MS SQL', category: 'Database', pct: 75, desc: 'Used in enterprise-style projects. Wrote complex queries, stored procedures, and managed relational schemas in SQL Server.' },
  { logo: `${D}/mysql/mysql-original.svg`,            label: 'MySQL',         category: 'Database',        pct: 80, desc: 'Most-used relational database. Designed schemas, wrote joins and aggregations, and integrated MySQL with PHP and Node.js backends.' },
  { logo: `${D}/postgresql/postgresql-original.svg`,  label: 'PostgreSQL',    category: 'Database',        pct: 70, desc: 'Used with Django and Node projects. Leveraged advanced features like JSONB, indexing, and full-text search.' },
  { logo: `${D}/figma/figma-original.svg`,            label: 'Figma',         category: 'Design',          pct: 80, desc: 'Designed UI mockups, prototypes, and design systems. Used auto-layout, components, and dev mode for handoff to code.' },
  { logo: `${D}/postman/postman-original.svg`,        label: 'Postman',       category: 'API Tool',        pct: 80, desc: 'Used to test and document REST APIs during development. Created collections, environment variables, and automated API tests.' },
  { logo: `${D}/unity/unity-original.svg`,            label: 'Unity',         category: 'Game Engine',     pct: 75, desc: 'Built 2D and 3D games with Unity and C#. Used physics engine, animation controllers, and scene management for game projects.' },
  { logo: `${D}/vitejs/vitejs-original.svg`,          label: 'Vite',          category: 'Build Tool',      pct: 80, desc: 'Primary build tool for React projects. Used for fast HMR, optimized production builds, and plugin ecosystem including this portfolio.' },
]

const galleryItems = skills.map(s => ({ src: '', alt: s.label, label: s.label, logo: s.logo, category: s.category, pct: s.pct, desc: s.desc }))

export default function Skills() {
  return (
    <section id="skills" className="aurora-section">
      <div className="aurora-bg">
        <Threads amplitude={1} distance={0} enableMouseInteraction color={[1, 1, 1]} />
      </div>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-hint">Drag to explore all skills</p>
      </div>
      <div className="skills-dome-wrap">
        <DomeGallery
          images={galleryItems}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
          overlayBlurColor="var(--bg, #080808)"
        />
      </div>
    </section>
  )
}
