import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to us and we’ll be happy to help.</p>

      <div className="contact-details">
        <h3>Email Support:</h3>
        <p>📩 support@legalvault.com</p>

        <h3>Call Us:</h3>
        <p>📞 +91 9660557683</p>

        <h3>Office Address:</h3>
        <p>🏢 123 Legal Street, Ahmedabad, India</p>
      </div>

      <h2>Follow Us</h2>
      <div className="social-links">
        <p>🔗 <a href="https://twitter.com/legalvault" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p>🔗 <a href="https://linkedin.com/company/legalvault" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>🔗 <a href="https://facebook.com/legalvault" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      </div>
    </div>
  );
};

export default Contact;
