import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Picture from "./pic.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../../animations";

function Hero() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => {
      if (contentRef.current) contentRef.current.classList.add("animate-in");
      if (imageRef.current) imageRef.current.classList.add("animate-in");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated background blobs */}
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <motion.div 
        variants={pageVariants} 
        initial="initial" 
        animate="animate"
        style={{ display: 'contents' }}
      >

      <div className="hero-content" ref={contentRef}>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for Work
        </div>

        <h1 className="hero-title">
          Hi, I'm <br />
          <span className="hero-name">Abdullah Butt</span>
        </h1>

        <p className="hero-role">
          <span className="role-text">Full-Stack Developer</span>
        </p>

        <p className="hero-tagline">
          Passionate about crafting clean, responsive, and high-performance
          web experiences using <strong>React.js</strong> and modern technologies.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="cta-button primary">
            View My Work
            <i className="fas fa-arrow-right"></i>
          </Link>
          <a href="/Resume.pdf" download className="cta-button secondary resume-btn">
            Download CV
            <i className="fas fa-download"></i>
          </a>
          <Link to="/contact" className="cta-button secondary">
            Contact Me
          </Link>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">1+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container" ref={imageRef}>
        <div className="image-glow-ring"></div>
        <div className="image-wrapper">
          <img src={Picture} alt="Abdullah Butt" className="hero-image" />
        </div>
      </div>
      </motion.div>
    </section>
  );
}

export default Hero;
