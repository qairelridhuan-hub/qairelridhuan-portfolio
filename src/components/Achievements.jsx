import useFadeIn from '../hooks/useFadeIn'
import Threads from './Threads'
import './Achievements.css'

const list = [
  { icon: 'fas fa-trophy',        text: 'Gold Medal — Malaysian Grand Invention Expo 2023' },
  { icon: 'fas fa-star',          text: '4.0 GPA — First Semester (Diploma, UTHM)' },
  { icon: 'fas fa-star-half-alt', text: '3.7 GPA — Second Semester; above 3.5 every semester' },
  { icon: 'fas fa-graduation-cap',text: '7As in SPM (2021)' },
  { icon: 'fas fa-graduation-cap',text: '6As in PT3 (2018)' },
  { icon: 'fas fa-award',         text: 'Best Student Certificates 2020–2021' },
  { icon: 'fas fa-book',          text: 'Best Student in English & Bahasa' },
  { icon: 'fas fa-flask',         text: 'Medal — Innovation Science Competition' },
]

function AchCard({ icon, text }) {
  const ref = useFadeIn()
  return (
    <div className="ach-card fade-in" ref={ref}>
      <div className="ach-icon"><i className={icon}></i></div>
      <p>{text}</p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="aurora-section">
      <div className="aurora-bg">
        <Threads amplitude={1} distance={0} enableMouseInteraction color={[1, 1, 1]} />
      </div>
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {list.map((a, i) => <AchCard key={i} {...a} />)}
        </div>
      </div>
    </section>
  )
}
