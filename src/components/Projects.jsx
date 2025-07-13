import React from 'react';
import '../styles/Projects.css';

import collabcode from '../assets/projects/collab-code.jpeg';
import saas from '../assets/projects/saas.jpeg';
import plant from '../assets/projects/plant.jpeg';
import ecom from '../assets/projects/ecom.jpeg';

const projects = [
  {
    title: 'Collaborative Code Editor',
    image: collabcode,
    description: 'A real time collaborative code editor with live sharing and syntax highlighting.',
    tech: ['React', 'Socket.io','Monaco Editor','Node.js'],
    github: 'https://github.com/Hack-in-Peace/Collaborative-Code-Editor',
    demo: 'https://collab-code-demo,com',
  },

  {
    title: 'SaaS Doctor Consulting Platform',
    image: saas,
    description: 'A full-stack SaaS-based doctor consulting platform with token system.',
    tech: ['React', 'TypeScript','Next.js','Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/collab-code',
    demo: 'https://saas-doctor-demo,com',
  },

  {
    title: 'Plant Disease Detection System',
    image: plant,
    description: 'A clean frontend UI for uploading plant images and receiving disease predictions.',
    tech: ['React', 'Bootstrap','Machine Learning','Deep Learning', 'MongoDB'],
    github: 'https://github.com/Hack-in-Peace/PlantDiseaseDetection',
    demo: 'https://plant-disease-demo,com',
  },

  {
    title: 'An E-Commerce Web Application',
    image: ecom,
    description:  'An e-commerce platform with product listing, shopping cart, and payment flow.',
    tech: ['React', 'Redux','Firebase','Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/collab-code',
    demo: 'https://ecommerce-demo,com',
  },
];

const Projects = () => {
  return (
    <section className="section-wrapper projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
               <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;