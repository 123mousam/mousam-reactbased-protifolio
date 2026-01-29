import React from "react";
import { FaGithub, FaLinkedin,  FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Kumari Mousam</h3>
          <p>Django & Python Developer</p>
        </div>

        <div className="footer-center">
          <a href="mailto:your.email@example.com">
            <FaEnvelope />mousammishra79@gmailcom
          </a>
          <a href="tel:+1234567890">
            <FaPhone /> 7982985575
          </a>
        </div>

        <div className="footer-right">
          <h4>Connect with me</h4>
          <div className="footer-social">
            <a href="https://github.com/123mousam" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mousam-mishra-10a425343" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a 
            href="https://wa.me/7982985575?text=Hello%20there!" 
              target="_blank" 
              rel="noreferrer">

  <FaWhatsapp />
</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mousam— All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
