import React from 'react';
import '../styles/Experience.css';

import webstack from '../assets/expi/webs.jpg';
import internp from '../assets/expi/internpe.jpeg';

const experienceData = [
  {
    logo: webstack,
    role: 'Full Stack Developer Intern',
    company: 'WebStack Academy ',
    date: 'June 2024 – Aug 2024',
    description:
      'Worked on MERN stack projects involving frontend design and backend APIs. Collaborated in an agile team and contributed to real-world applications.',
  },

  {
    logo: internp,
    role: ' Web Developer Intern',
    company: 'Internpe',
    date: 'Aug 2024 – Oct 2024',
    description:
      'Completed multiple frontend projects including a to-do app and user profile card using ReactJS and CSS. Gained real-time coding exposure.',
  },
];

const Experience = () => {
  return (
    <div className="section-wrapper exp-section" id="experience">
      <h2 className="exp-title">Experience</h2>

      <div className="exp-timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="exp-card" data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} >
            <div className="exp-line" />
            <div className="exp-logo">
              <img src={item.logo} alt="company logo" />
            </div>
            <div className="exp-content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <span className="exp-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
