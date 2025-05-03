import React from 'react';
import './About.css';


function About() {
  
  const mainAboutContent = {
      heading: "My Journey into Tech", 
      paragraphs: [
          "Hello! I'm Abdullah Butt, a passionate full-stack developer with a focus on the frontend development i:e: React Js ,  MERN stack and a keen interest in  WordPress.",
          "My journey into technology began with Online Courses and i have also intrest in coding . Since then, I've been dedicated to building robust and user-friendly applications.",
          "I thrive on learning new technologies and solving complex problems. I enjoy  creating responsive user interfaces with React Js , designing efficient backend APIs, exploring new libraries and as well wordpress."
      ]
  };

  const sectionTwoContent = {
      heading: "Focusing on [Specific Area, e.g., Frontend Development]",
      paragraphs: [
       "A front-end developer specializing in crafting dynamic and responsive user interfaces with React, I also build robust server-side applications using Node.js. My focus is on creating seamless, full-stack web experiences."
      ]
  };

  const sectionThreeContent = {
      heading: "My Passion and Future Direction",
      paragraphs: [
       "My current role involves teaching web development lectures at the university level, where I guide around 10 students through the fundamentals of bringing websites to life. This experience in explaining technical concepts not only benefits my students but also significantly fuels my own deep passion for coding.",
       "Outside of the classroom, coding isn't just a profession; it's my main hobby and where I genuinely love spending my time. I get immense satisfaction from the process of turning creative ideas into functional reality through code, constantly learning and exploring new technologies along the way. Looking forward, my clear goal is to channel this passion and my practical teaching experience into a dedicated career as a software developer, contributing to exciting projects and continuing to build my technical expertise."
      ]
  };


  return (
    <section className="about-section">
      <div className="container">
       
        <h2 className="section-title">About Me</h2>

       
    
        <div className="additional-about-section"> 
             <h3 className="additional-section-heading">{mainAboutContent.heading}</h3>
             <div className="additional-section-text">
                 {mainAboutContent.paragraphs.map((paragraph, index) => (
                     <p key={index}>{paragraph}</p>
                 ))}
             </div>
         </div>
        <div className="additional-about-section"> 
             <h3 className="additional-section-heading">{sectionTwoContent.heading}</h3>
             <div className="additional-section-text">
                 {sectionTwoContent.paragraphs.map((paragraph, index) => (
                     <p key={index}>{paragraph}</p>
                 ))}
             </div>
         </div>

   
        <div className="additional-about-section">
             <h3 className="additional-section-heading">{sectionThreeContent.heading}</h3>
             <div className="additional-section-text"> 
                 {sectionThreeContent.paragraphs.map((paragraph, index) => (
                     <p key={index}>{paragraph}</p>
                 ))}
             </div>
         </div>

      </div>
    </section>
  );
}

export default About;
