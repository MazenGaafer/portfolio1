import React from 'react';
import Tilt from 'react-parallax-tilt';
import aboutImage from '../assets/about.jpeg';
const About = () => {
  return (
    <section id="about" className="about animated">
      <div className="container">
        <h2 className="section-title animated">About Me</h2>
        <div className="about-content">
          <div className="about-text animated">
            <p>Mazen Gaafer is a passionate Full-Stack Web Developer who focuses on building modern, scalable, and user-friendly web applications. He has experience working on real-world projects, including interactive platforms and full management systems. He enjoys turning ideas into functional digital products, with strong attention to performance, clean code, and user experience.</p>
            <div className="personal-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <a href="#" className="btn btn-outline">Download Resume</a>
          </div>
          <div className="about-image animated">
            <Tilt className="tilt-card" tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1200}>
              <div className="profile-image-wrapper-large">
                <img src={aboutImage} alt="Mazen Gaafer - About" className="profile-image-large" />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;