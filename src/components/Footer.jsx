import React from "react";

function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-heading">Murat Can Y.</h3>
            <p>
              Senior React Developer based in Izmit, Turkey with 5+ years of
              experience building modern web applications.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upwork Profile
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Get In Touch</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@muratcany.com">contact@muratcany.com</a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © 2025 Murat Can Y. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
