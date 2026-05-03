import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';
import { pageVariants, staggerContainer, fadeUp } from '../../animations';
import { Helmet } from 'react-helmet-async';

function Education() {

  const educationEntries = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Gujrat, Gujrat',
      years: '2023 - 2027 (Expected)',
      icon: 'fas fa-university',
      details: [
        'Specializing in Modern Web Technologies and Software Architecture.',
        'Core Subjects: Data Structures, Algorithms, Database Systems, Software Engineering.',
        'Maintaining strong academic performance with a focus on practical coding.'
      ]
    },
    {
      degree: 'Full Stack Web Developer Certification',
      institution: 'Online Learning Hub',
      years: '2023 - 2024',
      icon: 'fas fa-code',
      details: [
        'Comprehensive training in MERN Stack (MongoDB, Express, React, Node.js).',
        'Built multiple responsive frontend and full-stack projects.',
        'Learned advanced JavaScript (ES6+), RESTful APIs, and Git version control.'
      ]
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab College, Wazirabad',
      years: '2021 - 2023',
      icon: 'fas fa-graduation-cap',
      details: [
        'Focused on Computer Science, Mathematics, and Physics.',
        'Developed foundational logic and problem-solving skills.',
        'Introduction to C Language and procedural programming.'
      ]
    }
  ];

  return (
    <section className="education-section">
      <Helmet>
        <title>Education | Abdullah Butt</title>
        <meta name="description" content="View the educational background and certifications of Abdullah Butt." />
      </Helmet>
      <div className="edu-bg">
        <div className="edu-blob edu-blob-1"></div>
        <div className="edu-blob edu-blob-2"></div>
      </div>

      <motion.div 
        variants={pageVariants} 
        initial="initial" 
        animate="animate"
        className="edu-container"
      >
        <div className="edu-header">
          <span className="edu-badge">Academic Background</span>
          <h2 className="edu-title">My <span className="edu-highlight">Education</span></h2>
          <div className="edu-divider"></div>
        </div>

        <div className="timeline">
          {educationEntries.map((entry, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                <i className={entry.icon}></i>
              </div>
              
              <div className="timeline-content">
                <div className="edu-card">
                  <div className="edu-card-header">
                    <span className="edu-duration">{entry.years}</span>
                    <h3 className="edu-degree">{entry.degree}</h3>
                    <p className="edu-inst">{entry.institution}</p>
                  </div>
                  
                  <div className="edu-card-body">
                    <ul className="edu-details">
                      {entry.details.map((detail, dIndex) => (
                        <li key={dIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
