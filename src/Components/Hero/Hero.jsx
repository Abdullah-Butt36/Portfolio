import React from "react";
import "./Hero.css";
import Picture from "./Pic.png";
import { Link } from "react-router-dom";

function Hero() {
  const name = "Abdullah Butt";
  const tagline =
    "A Full-Stack Web Developer passionate about React Js and versatile WordPress development.";

  const heroImageAlt = "Abdullah Butt image";

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{name}</span>
        </h1>

        <p className="hero-tagline">{tagline}</p>

        <Link to="/projects" className="cta-button">
          View My Work
        </Link>
      </div>

      <div className="hero-image-container">
        <img src={Picture} alt={heroImageAlt} className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
