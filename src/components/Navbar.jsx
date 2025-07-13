import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" sextion-wrapper navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Rima</div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <div className="nav-center">
          <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#education" onClick={toggleMenu}>Education</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>

            {/* Show GitHub button in mobile dropdown */}
            <li className="github-mobile">
              <a
                href="https://github.com/Hack-in-Peace"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
                onClick={toggleMenu}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* GitHub button for large screen only */}
        <div className="nav-right">
          <a
            href="https://github.com/Hack-in-Peace"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button desktop-only"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
