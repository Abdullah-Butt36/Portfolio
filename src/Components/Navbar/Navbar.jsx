import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Automatically close mobile menu if screen is resized beyond mobile threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMobileMenu}>Abdullah Butt</Link>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contact
          </NavLink>
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
