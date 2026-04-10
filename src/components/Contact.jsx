import useFadeIn from '../hooks/useFadeIn'
import './Contact.css'

const contacts = [
  { icon: 'fas fa-envelope',       label: 'Email',    value: 'qayyumqairel1811@gmail.com', href: 'mailto:qayyumqairel1811@gmail.com' },
  { icon: 'fas fa-phone',          label: 'Phone',    value: '011 6229 3464',               href: 'tel:01162293464' },
  { icon: 'fab fa-linkedin-in',    label: 'LinkedIn', value: 'qairel-ridhuan',              href: 'https://www.linkedin.com/in/qairel-ridhuan-093b09256/' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Kuala Terengganu, Terengganu', href: null },
]

function ContactCard({ icon, label, value, href }) {
  const ref = useFadeIn()
  const content = (
    <>
      <div className="contact-icon-wrap">
        <i className={icon}></i>
      </div>
      <div className="contact-info">
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
      </div>
      {href && <i className="fas fa-arrow-right contact-arrow"></i>}
    </>
  )
  return href
    ? <a className="contact-card fade-in" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" ref={ref}>{content}</a>
    : <div className="contact-card no-link fade-in" ref={ref}>{content}</div>
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper">

          {/* Left — heading */}
          <div className="contact-left">
            <p className="contact-eyebrow">Let's Connect</p>
            <h2 className="contact-heading">Get In<br /><span>Touch</span></h2>
            <p className="contact-desc">
              Open to internship opportunities, collaborations, and new projects. I'd love to hear from you — whether it's a quick question or a big idea.
            </p>
            <div className="contact-status">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
          </div>

          {/* Right — cards */}
          <div className="contact-right">
            {contacts.map((c, i) => <ContactCard key={i} {...c} />)}
          </div>

        </div>
      </div>
    </section>
  )
}
