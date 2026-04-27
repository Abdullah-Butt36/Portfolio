import React, { useState, useRef } from 'react';
import './Contact.css'; 
import { motion } from 'framer-motion';
import { pageVariants, staggerContainer, fadeUp } from '../../animations';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emailAddress = "abdullahbutt1054@gmail.com"; 
  const phoneNumber = "+92 - 324 - 1738798"; 

  const contactInfos = [
    { icon: "fas fa-envelope", label: "Email Me", value: emailAddress, link: `mailto:${emailAddress}` },
    { icon: "fas fa-phone-alt", label: "Call Me", value: phoneNumber, link: `tel:${phoneNumber.replace(/\s/g, '')}` },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "Gujrat, Pakistan", link: "#" }
  ];

  const socialLinks = [
    { platform: 'Upwork', url: 'https://www.upwork.com/freelancers/~01169d69aea13a86c2', icon: 'fab fa-upwork' }, 
    { platform: 'GitHub', url: 'https://github.com/Abdullah-Butt36', icon: 'fab fa-github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-butt-087ab8280/', icon: 'fab fa-linkedin-in' },
    { platform: 'Twitter', url: 'https://x.com/Abdullah7865130', icon: 'fab fa-twitter' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    // IMPORTANT: Replace these with your actual EmailJS IDs from your dashboard
    // Service ID, Template ID, and Public Key
    emailjs.sendForm(
      'service_3asji8p', 
      'template_hgv93sh', 
      form.current, 
      'iGwNSW8quH5PQNZ3N'
    )
      .then((result) => {
          setIsSending(false);
          setStatus({ type: 'success', message: 'Message sent successfully! ✅' });
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          // Clear message after 5 seconds
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      }, (error) => {
          setIsSending(false);
          setStatus({ type: 'error', message: 'Failed to send message. Please try again. ❌' });
          console.error('EmailJS Error:', error);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-bg">
        <div className="contact-blob contact-blob-1"></div>
        <div className="contact-blob contact-blob-2"></div>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-header"
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-title">Let's <span className="contact-highlight">Connect</span></h2>
          <div className="contact-divider"></div>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <motion.div 
          className="contact-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left: Contact Info */}
          <motion.div className="contact-info" variants={fadeUp}>
            <div className="info-cards">
              {contactInfos.map((info, index) => (
                <div className="info-item-card" key={index}>
                  <div className="info-icon-wrap">
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-details">
                    <h4>{info.label}</h4>
                    <a href={info.link}>{info.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-connect-box">
              <h4>Social Profiles</h4>
              <div className="social-links-grid">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                  >
                    <i className={link.icon}></i>
                    <span>{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div className="contact-form-card" variants={fadeUp}>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="What is this about?" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Your message here..." 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`status-msg ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? (
                  <>
                    <span>Sending...</span>
                    <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
