import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">Murat Can Y.</div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
