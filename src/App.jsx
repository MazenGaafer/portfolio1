import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './animations.css';
import ScrollReveal from 'scrollreveal';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    // Apply dark mode class to body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Initialize ScrollReveal animations
    if (typeof window !== 'undefined') {
      const sr = ScrollReveal({
        distance: '60px',
        duration: 1500,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        delay: 0,
      });

      sr.reveal('.hero-text', { origin: 'left' });
      sr.reveal('.hero-image', { origin: 'right' });
      sr.reveal('.section-title', { origin: 'top' });
      sr.reveal('.about-text', { origin: 'left' });
      sr.reveal('.about-image', { origin: 'right' });
      sr.reveal('.skill-category', { origin: 'bottom', interval: 200 });
      sr.reveal('.project-card', { origin: 'bottom', interval: 200 });
      sr.reveal('.timeline-item', { origin: 'left', interval: 300 });
      sr.reveal('.contact-info', { origin: 'left' });
      sr.reveal('.contact-form', { origin: 'right' });
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="App">
      {/* Animated background */}
      <div className="animated-bg"></div>
      
      {/* Floating background shapes */}
      <div className="floating-shape circle" style={{ top: '10%', left: '5%' }}></div>
      <div className="floating-shape triangle" style={{ top: '20%', right: '10%' }}></div>
      <div className="floating-shape square" style={{ bottom: '30%', left: '15%' }}></div>
      <div className="floating-shape circle" style={{ top: '60%', right: '5%' }}></div>
      <div className="floating-shape triangle" style={{ bottom: '10%', right: '20%' }}></div>
      
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;