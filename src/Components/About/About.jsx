import React from 'react';
import './about.css';
import { motion } from 'framer-motion';
import { pageVariants } from '../../animations';
import { Helmet } from 'react-helmet-async';

function About() {
  const skills = [
    { icon: "fas fa-code", label: "React.js" },
    { icon: "fas fa-server", label: "Node.js" },
    { icon: "fab fa-js-square", label: "JavaScript" },
    { icon: "fas fa-database", label: "MongoDB" },
    { icon: "fas fa-fire", label: "Express.js" },
    { icon: "fab fa-git-alt", label: "Git & GitHub" },
    { icon: "fas fa-bolt", label: "Supabase" },
  ];

  return (
    <section className="about-section">
      <Helmet>
        <title>About Me | Abdullah Butt</title>
        <meta name="description" content="Learn more about Abdullah Butt's journey as a Full-Stack Developer and his experience in the MERN stack." />
      </Helmet>
      <div className="about-bg">
        <div className="about-blob about-blob-1"></div>
        <div className="about-blob about-blob-2"></div>
      </div>

      <motion.div 
        variants={pageVariants} 
        initial="initial" 
        animate="animate"
      >

      <div className="about-container">

        {/* Header */}
        <div className="about-header">
          <span className="about-badge">Get To Know Me</span>
          <h2 className="about-title">About <span className="about-highlight">Me</span></h2>
          <div className="about-divider"></div>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">

          {/* Left — Personal Info */}
          <div className="about-card about-personal">
            <div className="card-icon-wrap">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>My Journey</h3>
            <p>
              I'm <strong>Abdullah Butt</strong>, a passionate Full-Stack Developer
              focused on building clean, performant, and scalable web applications.
            </p>
            <p>
              My journey started with self-learning through online courses, which quickly
              grew into a deep love for coding. I specialize in the <strong>MERN stack</strong> and
              enjoy turning complex problems into elegant solutions.
            </p>
            <p>
              I currently teach web development at the university level, guiding students
              through the fundamentals of modern web technologies — an experience that
              deepens my own understanding and keeps my passion alive.
            </p>
          </div>

          {/* Right — Stats + Skills */}
          <div className="about-right">

            {/* Stats */}
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <span className="stat-num">1+</span>
                <span className="stat-desc">Year of Experience</span>
              </div>
              <div className="about-stat-card">
                <span className="stat-num">10+</span>
                <span className="stat-desc">Projects Completed</span>
              </div>
              <div className="about-stat-card">
                <span className="stat-num">10+</span>
                <span className="stat-desc">Students Mentored</span>
              </div>
              <div className="about-stat-card">
                <span className="stat-num">5+</span>
                <span className="stat-desc">Technologies Mastered</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="about-card about-tech">
              <h3>Tech I Work With</h3>
              <div className="tech-grid">
                {skills.map((skill, index) => (
                  <div className="tech-chip" key={index}>
                    <i className={skill.icon}></i>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Passion Block */}
        <div className="about-passion">
          <div className="passion-icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="passion-content">
            <h3>What Drives Me</h3>
            <p>
              Coding isn't just my profession — it's my hobby. I get immense satisfaction from
              turning ideas into functional, beautiful reality through code. My goal is to build
              meaningful digital experiences and grow as a dedicated Full-Stack Developer, contributing
              to exciting projects while constantly expanding my technical expertise.
            </p>
          </div>
        </div>

      </div>
      </motion.div>
    </section>
  );
}

export default About;
