
// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

import html from '../assets/skills/html5.png';
import css from '../assets/skills/css1.png';
import js from '../assets/skills/javascript.png';
import react from '../assets/skills/react.png';
import node from '../assets/skills/nodedotjs.png';
import express from '../assets/skills/express.png';
import mongodb from '../assets/skills/mongodb.png';
import java from '../assets/skills/java.png';
import python from '../assets/skills/python.png';
import git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';
import postman from '../assets/skills/postman.png';
import netlify from '../assets/skills/netlify.png';
import c from '../assets/skills/c.png';
import dotnet from '../assets/skills/dotnet.png';
import nextdotjs from '../assets/skills/nextdotjs.png';

const Skills = () => {
  const frontend = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: js },
    { name: 'React', icon: react },
    { name: 'Next.js', icon: nextdotjs },
  ];

  const backend = [
    { name: 'Node.js', icon: node },
    { name: 'Express.js', icon: express },
    { name: 'MongoDB', icon: mongodb },
    { name: '.Net' , icon: dotnet},
  ];

  const languages = [
    { name: 'Java', icon: java },
    { name: 'Python', icon: python },
     { name: 'C', icon: c },

  ];

  const others = [
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
    { name: 'Postman', icon: postman },
    { name: 'Netlify', icon: netlify },
  ];

  const cards = [
    { title: 'Frontend', items: frontend },
    { title: 'Backend', items: backend },
    { title: 'Programming Languages', items: languages },
    { title: 'Others', items: others },
  ];

  const renderCard = (title, items, delay) => (
    <div className="skill-card" data-aos="zoom-in" data-aos-delay={delay}>
      <h3>{title}</h3>
      <div className="skill-items">
        {items.map(({ name, icon }) => (
          <div className="skill-item" key={name}>
            <img src={icon} alt={name} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section-wrapper skills" id="skills" >
      <h2>Skills & Specializations</h2>
      <p>Here are the technologies I work with:</p>
      <div className="skills-container">
        {cards.map((card, index) => 
        renderCard(card.title, card.items, index * 200) //0ms, 200ms, 400ms, 600ms
        )}
      </div>
    </section>
  );
};

export default Skills;
