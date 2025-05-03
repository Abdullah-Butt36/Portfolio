import React from 'react';
import './Education.css'; 


function Education() {

  const educationEntries = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Gujrat, Gujrat',
      years: 'Expected Graduation : 2027',
      details: [
        'Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engeenring , Web Development.'
      ]
    },
    {
      degree: 'Ics - Physics',
      institution: 'punjab College , wazirbad',
      years: '2021 - 2023',
      details: [
        'Focus on Computer and Mathematics'
      ]
    },
    {
      degree: 'Full Stack Web Developer',
      institution: 'Online Hub',
      years: '2023 - 2024',
      details: [
       " My technical stack includes web development with HTML, CSS, JavaScript, and backend integrations, as well as practical security tools for network defense and vulnerability analysis"
      ]
    }
  ];

  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-list">
          {educationEntries.map((entry, index) => (
            <div className="education-item" key={index}>
              <h3 className="education-degree">{entry.degree}</h3>
              <p className="education-institution">{entry.institution}</p>
              <p className="education-years">{entry.years}</p>
              {entry.details && entry.details.length > 0 && (
                <ul className="education-details">
                  {entry.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
