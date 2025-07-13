import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className=" contact-section" id="contact">
      <div className="contact-content-wrapper">
        <button className="contact-badge">Get in Touch</button>
        <h2>Let's Connect</h2>
        <p>
          I'm available for freelance or full-time work. Let's collaborate and bring your ideas to life!
        </p>

        <div className="contact-details">
          <p><FaEnvelope /> rimamajumder2work@gmail.com</p>
          <p><FaMapMarkerAlt /> Kolkata, West Bengal, IN</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <a href="https://github.com/Hack-in-Peace" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rima-majumder-28497922a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:rimamajumder2work@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-bottom">
          <p>© 2025 Rima Majumder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
