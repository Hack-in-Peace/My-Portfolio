import React from 'react';
import '../styles/Hero.css';
import profileImg from '../assets/RimaMajumder-profile.jpg';


function Hero() {
  return (
    <section className="section-wrapper hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Hi, I am <span className="highlight">Rima Majumder</span></h1>
          <h2>I am a <span className="typed-text">Full Stack Developer</span></h2>
          <p>
            I am a passionate web developer with hands-on experience in building clean UI/UX experiences. Skilled in the MERN stack, Java & Python, I enjoy crafting interactive websites and solving real-world problems.
          </p>
          <a href="/resume.pdf" className="resume-button" target="_blank" rel="noreferrer">
            Check Resume
          </a>
        </div>
        <div className="hero-right">
          <img src={profileImg} alt="Rima Majumder" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
