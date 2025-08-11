import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">

        
          <div className="col-md-4">
            <h5 className="footer-title">Vyasa Yoga Center</h5>
            <p>Your journey to inner peace and physical wellness starts here.</p>
          </div>


          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/Class">Courses</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          
          <div className="col-md-4">
            <h5 className="footer-title">Contact Us</h5>
            <p>📍 Calicut, Kerala</p>
            <p>📞 +91 9047859944</p>
            <p>✉ vyasayogacenter@gmail.com</p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="text-center mt-3">
          <p className="footer-copy">
             2025 Vyasa Yoga Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
