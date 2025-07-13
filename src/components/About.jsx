import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className=" about-section" id="about" data-aos="fade-up">
      <div className="about-inner">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <p className="about-text" data-aos="fade-right">
          I’m a passionate Full Stack Developer who loves building clean, responsive UIs and solving real-world problems with code. My tech stack includes React, Node.js, MongoDB, Java, and Python. I value clean code, learning, and bringing ideas to life through design and logic.
        </p>
        <p className="about-text" data-aos="fade-right">
          Currently focused on building full-stack applications using the MERN stack and exploring scalable backend systems.
        </p>
        <p className="about-text fun-fact" data-aos="zoom-in">
          Fun fact: I enjoy designing UIs and reading tech blogs in my free time!
        </p>
      </div>
      </div>
    </section>
  );
};

export default About;
