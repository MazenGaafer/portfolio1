import React, { useState } from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#home">MG</a>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
          
          <div className="nav-toggle" id="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={`bar ${isMenuOpen ? 'rotate' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'hide' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'rotate-reverse' : ''}`}></span>
          </div>
          
          <div className="theme-toggle" onClick={toggleDarkMode}>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;