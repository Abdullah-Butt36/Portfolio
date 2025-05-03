import React from "react";
import "./Project.css";

import fiver from "./fiverrr.jpg";
import realstate from "./realstate.jpg";
import spotify from "./spotify.jpg";
function Project() {
  const projectOneData = {
    title: "Fiver Clone",
    description:
      " I developed the frontend for a Fiverr clone, focusing on creating a smooth and intuitive user experience for both freelancers and clients. Using technologies like HTML, CSS, JavaScript, and React.js, I built responsive pages for core features such as service listings, user profiles, order management, messaging, and reviews. I integrated dynamic components with backend APIs to enable real-time updates, secure logins, and seamless gig browsing and booking. The design prioritized usability, performance, and mobile responsiveness to closely mirror the functionality and flow of the original Fiverr platform, while maintaining a clean and scalable codebase.",
  };

  const projectTwoData = {
    title: "RealEsatate Website",
    description:
      "I developed the frontend of a real estate website focused on delivering a clean, responsive, and user-friendly interface for property seekers and agents. Using HTML, CSS, JavaScript, and modern frameworks like React.js, I built dynamic pages for property listings, detailed search filters, interactive maps, user profiles, and contact forms. I integrated the frontend with backend APIs to display real-time property data, support user authentication, and enable features like saving favorites and scheduling viewings. The design emphasized visual clarity, performance, and mobile responsiveness, ensuring a seamless browsing experience across all devices.",
  };

  const projectThreeData = {
    title: "Spotify Clone",
    description:
      "Developed a Spotify clone with features to upload, browse, and play songs seamlessly. Implemented responsive UI and integrated audio playback functionality for an immersive music experience.Used modern web technologies to simulate real-time music streaming and user interactions.",
  };

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-list">
          <div className="project-item">
            <div className="project-image-container">
              <img
                src={fiver}
                alt={`${projectOneData.title} Screenshot`}
                className="project-image"
              />
            </div>

            <div className="project-details">
              <h3 className="project-title">{projectOneData.title}</h3>
              <p className="project-description">
                {projectOneData.description}
              </p>
              <div className="project-links"></div>
            </div>
          </div>

          <div className="project-item reverse-layout">
            <div className="project-image-container">
              <img
                src={realstate}
                alt={`${projectTwoData.title} Screenshot`}
                className="project-image"
              />
            </div>

            <div className="project-details">
              <h3 className="project-title">{projectTwoData.title}</h3>
              <p className="project-description">
                {projectTwoData.description}
              </p>
              <div className="project-links"></div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image-container">
              <img
                src={spotify}
                alt={`${projectThreeData.title} Screenshot`}
                className="project-image"
              />
            </div>

            <div className="project-details">
              <h3 className="project-title">{projectThreeData.title}</h3>
              <p className="project-description">
                {projectThreeData.description}
              </p>
              <div className="project-links"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
