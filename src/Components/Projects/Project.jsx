import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import { pageVariants, staggerContainer, fadeUp } from "../../animations";

import fiver from "./fiverrr.jpg";
import realstate from "./realstate.jpg";
import codefixss from "./codefixss.jpg";

function Project() {
  const projects = [
    {
      title: "CodeFix - Developer Utility Suite",
      category: "Full-Stack Web App",
      description: "A high-performance platform for developers featuring a community Q&A forum (Stack Overflow Clone), an AI Coding Assistant, high-speed conversion tools, and essential developer utilities. Designed for seamless workflow optimization.",
      image: codefixss, 
      tech: ["React.js", "Supabase", "Tailwind CSS", "Framer Motion"],
      links: {
        live: "https://codefix-website-iota.vercel.app/",
        github: "https://github.com/codefixplatform-tech/codefix_website.git"
      },
      featured: true
    },
    {
      title: "Fiverr Ecosystem Clone",
      category: "Frontend Development",
      description: "A sophisticated frontend clone of the Fiverr marketplace. Features include dynamic service listings, advanced user profiles, real-time messaging interfaces, and a complete order management system with mobile-responsive design.",
      image: fiver,
      tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
      links: {
        live: "#",
        github: "https://github.com/Abdullah-Butt36"
      }
    },
    {
      title: "Premium Real Estate Hub",
      category: "Web Application",
      description: "A modern real estate platform focused on visual clarity and user experience. Implemented dynamic property filtering, interactive map integrations, and real-time data fetching for up-to-date listings.",
      image: realstate,
      tech: ["React.js", "Context API", "CSS Modules", "REST API"],
      links: {
        live: "#",
        github: "https://github.com/Abdullah-Butt36"
      }
    }
  ];

  return (
    <section className="projects-section">
      <div className="proj-bg">
        <div className="proj-blob proj-blob-1"></div>
        <div className="proj-blob proj-blob-2"></div>
      </div>

      <motion.div 
        variants={pageVariants} 
        initial="initial" 
        animate="animate"
        className="proj-container"
      >
        <div className="proj-header">
          <span className="proj-badge">Selected Works</span>
          <h2 className="proj-title">Featured <span className="proj-highlight">Projects</span></h2>
          <div className="proj-divider"></div>
        </div>

        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <motion.div 
              className={`project-card ${project.featured ? 'featured-card' : ''}`} 
              key={index}
              variants={fadeUp}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-links">
                    <a href={project.links.github} target="_blank" rel="noreferrer" title="View Source">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.links.live} target="_blank" rel="noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-cat">{project.category}</span>
                  {project.featured && <span className="featured-badge">New</span>}
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Project;
