// Header.js
import React, { useState } from 'react';
import './Header.css';
import yourPhoto from '../components/header.jpg';
import linkedinIcon from '../components/linkedin-icon.png';
import githubIcon from '../components/github-icon.png';
import emailIcon from '../components/email-icon.png';
import backgroundImage from '../components/background-image.jpg'; // Replace with the actual path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${menuOpen ? 'menu-open' : ''}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' // Add this line
      }}
    >
      <div className="header-content">
        <div className="top-right">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className="center-content">
          <h1>Hello, I'm KAVYA AKKAMSETTY</h1>
          <p>&nbsp;</p>
          <div className="subtitle">
            <p>Web Developer | Mentor</p>
            <p>&nbsp;</p>
            <div className="subtitle1">
              <p>
                I'm a passionate web developer with expertise in front-end technologies
                including HTML, CSS, and JavaScript.
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="right-content">
          <img src={yourPhoto} alt="Your Photo" />
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kavya-naidu-920b93280/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Kaavya7214" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="mailto:naidukavya997@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
