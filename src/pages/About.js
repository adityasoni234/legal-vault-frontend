import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Legal Vault</h1>
      <p>
        Legal Vault is a secure and efficient platform designed to help legal professionals, businesses, and individuals 
        manage their legal documents with ease. Our platform provides end-to-end encryption, real-time access, and smart 
        search capabilities to ensure seamless document management.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our mission is to revolutionize legal document management by offering a smart, secure, and collaborative solution.
        We aim to make legal document handling stress-free and time-efficient for professionals across the industry.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>🔒 **Secure & Encrypted Storage** – Keep your legal documents safe with bank-grade encryption.</li>
        <li>📄 **Smart Organization** – Categorize, tag, and find documents instantly.</li>
        <li>👥 **Collaboration Made Easy** – Share documents securely with your team or clients.</li>
        <li>🚀 **Cloud Access Anytime** – View and manage documents from any device.</li>
      </ul>

      <p>
        Join thousands of legal professionals who trust Legal Vault to manage their documents securely.  
      </p>
    </div>
  );
};

export default About;
