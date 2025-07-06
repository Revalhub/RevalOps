import React from 'react';
import '../styles/Footer.css'; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <h4 className="footer-heading">Stay Connected</h4>
        <div className="footer-links">
          <a href="https://www.linkedin.com/company/revalops/" target="_blank" rel="noopener noreferrer">
            <img src="images/linkedin.png" alt="LinkedIn" className="footer-icon" /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="images/github.gif" alt="GitHub" className="footer-icon" /> GitHub
          </a>
          <a href="mailto:therevalops@gmail.com">
            <img src="images/icons8-gmail-60.png" alt="Email" className="footer-icon" /> Contact
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} RevalOps. All rights reserved.</p>
        <p>Made with <span style={{ color: '#e25555' }}>&#x2764;</span> in India</p>
      </div>
    </footer>
  );
};

export default Footer;
