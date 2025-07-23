import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company Profile</h3>
            <p>
              Perusahaan terkemuka yang berkomitmen untuk memberikan layanan terbaik 
              dan produk berkualitas tinggi kepada pelanggan kami.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Menu</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/karir">Karir</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Produk</h4>
            <ul className="footer-links">
              <li><a href="/products">Produk A</a></li>
              <li><a href="/products">Produk B</a></li>
              <li><a href="/products">Produk C</a></li>
              <li><a href="/products">Produk D</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Jl. Contoh No. 123, Jakarta Pusat
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +62 21 1234 5678
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                info@companyprofile.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Company Profile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 