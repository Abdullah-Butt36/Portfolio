import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Abdullah Butt</a>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to='/' ></Link>
        <li>
          <Link to="/about" onClick={toggleMobileMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/education" onClick={toggleMobileMenu}>
            Education
          </Link>
        </li>

        <li>
          <Link to="/skills" onClick={toggleMobileMenu}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={toggleMobileMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        className={`hamburger-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
