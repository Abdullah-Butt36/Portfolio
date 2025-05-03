import React from 'react';
import './Contact.css'; 


function Contact() {

  const email = "abdullahbutt1054@gmail.com"; 
  const phoneNumber = "+92 - 324 - 1738798"; 

  const socialLinks = [

    { platform: 'Upwork', url: 'https://www.upwork.com/freelancers/~01169d69aea13a86c2 ', icon: 'fab fa-upwork' }, 
   
    { platform: 'GitHub', url: 'https://github.com/Abdullah-Butt36', icon: 'fab fa-github' },
 
    { platform: 'Personal Website/Blog', url: 'https://abdullahcv123.netlify.app/', icon: 'fas fa-globe' },
  
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-content">
          <p className="contact-intro">
            Have a question, opportunity, or just want to connect? Feel free to reach out!
          </p>

        
          <div className="contact-info-item">
            <i className="fas fa-envelope contact-icon"></i> 
            <a href={`mailto:${email}`} className="contact-link">{email}</a>
          </div>

          <div className="contact-info-item">
             <i className="fas fa-phone contact-icon"></i> 
             <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="contact-link">{phoneNumber}</a>
          </div>


       
          <div className="contact-social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform} 
                className="social-icon-link"
              >
               
             <i className={link.icon}></i>
             </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
