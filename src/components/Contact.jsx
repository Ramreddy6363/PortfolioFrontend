import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>I'm always open to new opportunities and collaborations!</p>
        <div className="contact-links">
          <a href="https://github.com/Ramreddy6363" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="mailto:contact@example.com" className="contact-link">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
