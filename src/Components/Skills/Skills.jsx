import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { pageVariants, staggerContainer, fadeUp } from "../../animations";

function Skills() {
  const skillsData = [
    {
      category: "Frontend Architecture",
      icon: "fas fa-layer-group",
      skills: [
        { name: "React.js", icon: "fab fa-react" },
        { name: "Next.js", icon: "fas fa-bolt" },
        { name: "Redux Toolkit", icon: "fas fa-project-diagram" },
        { name: "JavaScript (ES6+)", icon: "fab fa-js" },
      ],
    },
    {
      category: "Backend & Cloud",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-fire" },
        { name: "Supabase", icon: "fas fa-bolt" },
        { name: "RESTful APIs", icon: "fas fa-exchange-alt" },
      ],
    },
    {
      category: "Databases",
      icon: "fas fa-database",
      skills: [
        { name: "MongoDB", icon: "fas fa-leaf" },
        { name: "PostgreSQL", icon: "fas fa-elephant" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "Mongoose", icon: "fas fa-plug" },
      ],
    },
    {
      category: "UI & Animation",
      icon: "fas fa-paint-brush",
      skills: [
        { name: "Tailwind CSS", icon: "fab fa-css3" },
        { name: "Framer Motion", icon: "fas fa-magic" },
        { name: "Responsive Design", icon: "fas fa-mobile-alt" },
        { name: "Sass / SCSS", icon: "fab fa-sass" },
      ],
    },
    {
      category: "Development Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git & GitHub", icon: "fab fa-github" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Postman", icon: "fas fa-satellite-dish" },
        { name: "npm / yarn", icon: "fab fa-npm" },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-bg">
        <div className="skills-blob skills-blob-1"></div>
        <div className="skills-blob skills-blob-2"></div>
      </div>

      <motion.div 
        variants={pageVariants} 
        initial="initial" 
        animate="animate"
        className="skills-container"
      >
        <div className="skills-header">
          <span className="skills-badge">My Technical Arsenal</span>
          <h2 className="skills-title">Technical <span className="skills-highlight">Skills</span></h2>
          <div className="skills-divider"></div>
        </div>

        <motion.div 
          className="skills-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skillsData.map((category, catIndex) => (
            <motion.div 
              className="skill-category-card" 
              key={catIndex}
              variants={fadeUp}
            >
              <div className="category-header">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-name">{category.category}</h3>
              </div>

              <div className="skills-items-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-tag" key={skillIndex}>
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
