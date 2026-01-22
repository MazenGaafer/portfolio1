import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 Mazen Gaafer. All rights reserved.</p>
        <div className="back-to-top">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}>
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;