import useTypewriter from '../hooks/useTypewriter'
import DarkVeil from './DarkVeil'
import FluidGlass from './FluidGlass'
import './Hero.css'

const roles = [
  'Software Engineering Undergraduate',
  'React & Mobile Developer',
  'IT Support Specialist',
]

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="hero">
      <div className="hero-bg">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* FluidGlass lens cursor effect */}
      <div className="hero-fluid-glass">
        <FluidGlass
          mode="lens"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01,
          }}
        />
      </div>

      <div className="hero-inner">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <p className="hero-greeting">HELLO, I'M</p>

          <h1 className="hero-name">
            Qairel Qayyum<br />
            Bin Muhamad
          </h1>

          <p className="hero-a">A</p>
          <h2 className="hero-title">
            <span className="typewriter-text">{typed}</span>
            <span className="typewriter-cursor">|</span>
          </h2>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/qairel-ridhuan093b09256/" target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:qayyumqairel1811@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:01162293464" title="Phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>

          <p className="hero-desc">
            Building real-time apps that help people manage their finances and work — combining software development with IT support expertise.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-outline">View Projects</a>
            <a href="#contact" className="btn-solid">Get In Touch</a>
          </div>
        </div>

        {/* RIGHT COLUMN — Profile Card */}
        <div className="hero-right">
          <div className="profile-card">
            {/* Photo fills the card */}
            <div className="profile-photo-wrap">
              <div className="profile-photo-fallback">QQ</div>
              <img
                src="/images/qairel.jpg"
                alt="Qairel Qayyum"
                className="profile-photo"
                onError={e => e.currentTarget.classList.add('hidden')}
              />
              {/* Name overlay at bottom of photo */}
              <div className="profile-photo-overlay">
                <div className="profile-name">Qairel Qayyum</div>
                <div className="profile-role">Software Engineer</div>
              </div>
            </div>
            {/* Footer */}
            <div className="profile-card-footer">
              <div className="profile-status">
                <span className="status-dot"></span>
                <span>Online</span>
                <a href="#contact" className="contact-me-btn">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
    </section>
  )
}
