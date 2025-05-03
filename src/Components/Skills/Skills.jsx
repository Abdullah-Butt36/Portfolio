import React from "react";
import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "fab fa-react" },
        { name: "JavaScript (ES6+)", icon: "fab fa-js" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Tailwind CSS", icon: "fas fa-wind" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Responsive Design", icon: "fas fa-mobile-alt" },
        { name: "WordPress", icon: "fab fa-wordpress" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-server" },
        { name: "RESTful APIs", icon: "fas fa-exchange-alt" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: "fas fa-database" }, // Example icon
        { name: "Mongoose", icon: "fas fa-leaf" },
        { name: "SQL", icon: "fas fa-database" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "npm / yarn", icon: "fab fa-npm" },
        { name: "VS Code", icon: "fas fa-code" }, // Example icon
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-categories">
          {skillsData.map((skillCategory, categoryIndex) => (
            <div className="skill-category" key={categoryIndex}>
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    {skill.icon && (
                      <i className={`skill-icon ${skill.icon}`}></i>
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
