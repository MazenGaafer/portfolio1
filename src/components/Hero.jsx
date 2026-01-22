import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/profile.jpeg'; // Replace with your actual image filename

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero animated">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animated">
            <Tilt className="tilt-card" tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1200}>
              <h1 className="hero-name glitch-text" data-text="Mazen Gaafer">Mazen Gaafer</h1>
            </Tilt>
            <h2 className="hero-title gradient-text">Full-Stack Web Developer</h2>
            <p className="hero-subtitle">Turning ideas into modern, scalable web solutions.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary ripple-button" onClick={() => scrollToSection('projects')}>View Projects</button>
              <button className="btn btn-secondary ripple-button" onClick={() => scrollToSection('contact')}>Contact Me</button>
            </div>
          </div>
          <div className="hero-image animated">
            <Tilt className="tilt-card" tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1200}>
              <div className="profile-image-wrapper">
                <img src={profileImage} alt="Mazen Gaafer - Profile" className="profile-image" />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;