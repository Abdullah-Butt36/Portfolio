import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Abdullah Butt</Link>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" end onClick={toggleMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" onClick={toggleMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={toggleMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={toggleMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMobileMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
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
