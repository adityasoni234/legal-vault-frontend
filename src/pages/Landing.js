import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LandingPage.css';
import { AppBar, Toolbar, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="logo">
          <h1>Legal Vault</h1>
        </div>
        <nav className="landing-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login" className="btn-outline">Login</Link></li>
            <li><Link to="/register" className="btn-primary">Get Started</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Legal Document Management <span className="highlight">Simplified</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Store, organize, and collaborate on your legal documents with our secure and intuitive platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-cta"
          >
            {/* ✅ Updated Routing */}
            <Link to="/login" className="btn-primary btn-large">Get Started</Link>
            <Link to="/about" className="btn-secondary btn-large">Learn More</Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Legal Vault?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🔒 Secure Storage</h3>
            <p>End-to-end encryption keeps your documents safe and accessible only to authorized users.</p>
          </div>
          <div className="feature-card">
            <h3>📁 Smart Organization</h3>
            <p>Create folders, add tags, and categorize documents easily.</p>
          </div>
          <div className="feature-card">
            <h3>🤝 Legal Collaboration</h3>
            <p>Share documents with teams and work efficiently on legal cases.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Secure Your Legal Documents?</h2>
          <p>Join legal professionals who have already simplified their document management.</p>
          <Link to="/login" className="btn-primary btn-large">Join Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-column">
            <h4>Legal Vault</h4>
            <p>Secure, organize, and manage legal documents efficiently.</p>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Legal Vault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
