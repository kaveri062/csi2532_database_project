import React from 'react';
import './Footer.css'; // Link to your CSS file for styling

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="social-media-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <nav className="footer-nav">
          <a href="/about-us">About Us</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className="copyright">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
