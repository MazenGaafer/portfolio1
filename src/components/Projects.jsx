import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

// استيراد الصور
import ecomImage from '../assets/ecom.webp';
import taskImage from '../assets/task.webp';
import blogImage from '../assets/blog.webp';
import resImage from '../assets/res.webp';
import laravelCrudImage from '../assets/laravel-crud.jpg';
import nodeAppImage from '../assets/node-app.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: 'https://github.com/MazenGaafer/Full-E-commerce-electronic-.git',
      image: ecomImage
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality and real-time updates.',
      technologies: ['React', 'JavaScript', 'CSS'],
      category: 'frontend',
      demoLink: '#',
      githubLink: '#',
      image: taskImage
    },
    {
      id: 3,
      title: 'Blog Management System',
      description: 'A comprehensive blog platform with user roles, content management, and SEO optimization.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'HTML/CSS'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: '#',
      image: blogImage
    },
    {
      id: 4,
      title: 'Restaurant Booking System',
      description: 'An online reservation system with calendar integration and automated confirmations.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: '#',
      image: resImage
    },
    {
      id: 5,
      title: 'Laravel CRUD Operations',
      description: 'Advanced backend system with complete CRUD operations using Laravel framework, featuring user authentication, data validation, and secure API endpoints.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'REST API'],
      category: 'backend',
      demoLink: '#',
      githubLink: 'https://github.com/MazenGaafer/laravel-CRUD-operation-.git',
      image: laravelCrudImage
    },
    {
      id: 6,
      title: 'Node.js Backend API',
      description: 'Professional backend API service built with Node.js and Express.js featuring RESTful endpoints, authentication, and database integration.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
      category: 'backend',
      demoLink: '#',
      githubLink: 'https://github.com/MazenGaafer/Node.js-web-application.git',
      image: nodeAppImage
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterButtons = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full-Stack', value: 'fullstack' }
  ];

  return (
    <section id="projects" className="projects animated">
      <div className="container">
        <h2 className="section-title animated gradient-text">My Projects</h2>
        <div className="filter-buttons">
          {filterButtons.map(button => (
            <button
              key={button.value}
              className={`filter-btn ${activeFilter === button.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(button.value)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <Tilt key={project.id} className="tilt-card" tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1200}>
              <div className="project-card animated" data-category={project.category}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href={project.githubLink} className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;