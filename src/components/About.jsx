import useFadeIn from '../hooks/useFadeIn'
import './About.css'

export default function About() {
  const ref = useFadeIn()
  return (
    <section id="about">
      <div className="container">
        <div className="glass-panel">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid fade-in" ref={ref}>
          <div className="about-avatar">
            <div className="avatar-circle">QQ</div>
            <div className="about-info-cards">
              <div className="info-card"><i className="fas fa-map-marker-alt"></i><span>Kuala Terengganu, Terengganu</span></div>
              <div className="info-card"><i className="fas fa-university"></i><span>UTHM — Software Engineering</span></div>
              <div className="info-card"><i className="fas fa-language"></i><span>Malay (Native) · English (Proficient)</span></div>
            </div>
          </div>
          <div className="about-text">
            <p>As a <strong>Software Engineering student</strong> with a strong foundation in programming, system development, and mobile app technologies, I combine both software and IT support capabilities.</p>
            <p>I am currently developing a <strong>real-time financial and work-management system</strong> for my Final Year Project using Expo, JavaScript, Firebase, and Git.</p>
            <p>Alongside software development, I have practical IT experience from my internship at <strong>Aptiv</strong>, involving PC troubleshooting, network setup, hardware upgrades, and system configuration across multiple departments.</p>
            <p>Known for <strong>adaptability, analytical thinking, teamwork, and problem-solving</strong>, I aim to contribute effectively in dynamic environments while continuously improving my technical skill set.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
