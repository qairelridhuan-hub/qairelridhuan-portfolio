import useFadeIn from '../hooks/useFadeIn'
import './Contact.css'

const contacts = [
  { icon: 'fas fa-envelope',       label: 'Email',    value: 'qayyumqairel1811@gmail.com', href: 'mailto:qayyumqairel1811@gmail.com' },
  { icon: 'fas fa-phone',          label: 'Phone',    value: '011 6229 3464',               href: 'tel:01162293464' },
  { icon: 'fab fa-linkedin-in',    label: 'LinkedIn', value: 'qairel-ridhuan093b09256',     href: 'https://www.linkedin.com/in/qairel-ridhuan093b09256/' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Kuala Terengganu, Terengganu', href: null },
]

function ContactCard({ icon, label, value, href }) {
  const ref = useFadeIn()
  const content = (
    <>
      <i className={icon}></i>
      <h4>{label}</h4>
      <p>{value}</p>
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
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">I'm open to internship opportunities, collaborations, and new projects. Feel free to reach out!</p>
        <div className="contact-grid">
          {contacts.map((c, i) => <ContactCard key={i} {...c} />)}
        </div>
      </div>
    </section>
  )
}
