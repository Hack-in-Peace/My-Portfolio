import React from 'react';
import '../styles/Education.css';
import svistlogo from '../assets/edu/svist.png';
import jsbvlogo from '../assets/edu/jsbv.jpeg';

const educationData = [
  {
    logo: svistlogo,
    institute: 'Swami Vivekananda Institute of Science & Technology',
    degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
    date: 'Sep 2021 – July 2025',
    grade: '8.47 CGPA',
    description:
      'I have completed my Bachelor’s degree in Computer Science and Engineering from Swami Vivekananda Institute of Science & Technology, with a CGPA of 8.47. My academic background provided a solid foundation in core areas such as Data Structures, Algorithms, and Database Management Systems, equipping me with strong problem-solving and analytical skills essential for real-world software development.',
  },
  {
    logo: jsbvlogo,
    institute: 'Jadavpur Sammilita Balika Vidyalaya',
    degree: 'WBBHSE (XII), Pure Science',
    date: 'Aug 2019 – Mar 2021',
    grade: '81.50%',
    description:
      'I completed my class 12th high school education from Jadavpur Sammilita Balika Vidyalaya, Kolkata.',
  },
  {
    logo: jsbvlogo,
    institute: 'Jadavpur Sammilita Balika Vidyalaya',
    degree: 'WBBSE (X)',
    date: 'Jan 2013 – Mar 2019',
    grade: '85%',
    description:
      'I completed my class 10th high school education from Jadavpur Sammilita Balika Vidyalaya, Kolkata.',
  },
];

const Education= () => {
  return (
    <div className="section-wrapper edu-section" id="education">
      <h2 className="edu-title">Education</h2>
      
      <div className="edu-timeline">
        {educationData.map((item, index) => (
          <div key={index} className="edu-card" data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} data-aos-duration="1000">
            <div className="edu-line" />
            <div className="edu-logo">
              <img src={item.logo} alt="institute logo" />
            </div>
            <div className="edu-content">
              <h3>{item.institute}</h3>
              <h4>{item.degree}</h4>
              <span className="edu-date">{item.date}</span>
              <p><strong>Grade:</strong> {item.grade}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
