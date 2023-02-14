import contacts from './data'
import './contact.styles.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
      I'm passionate about technology and feel that I have something to offer the industry. I look forward to taking a junior position with a company that will allow me to continue to learn new technologies while building upon my existing strengths in a team environment.
      </p>
      <div className="container contact__container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer" className='contact-link'>{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact