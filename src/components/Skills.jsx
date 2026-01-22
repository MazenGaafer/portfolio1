import React, { useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.skill-progress');
          progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillsData = [
    {
      category: 'Frontend',
      icon: 'fas fa-code',
      skills: [
        { name: 'HTML', level: '95%' },
        { name: 'CSS', level: '90%' },
        { name: 'JavaScript', level: '85%' },
        { name: 'React', level: '80%' }
      ]
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'PHP (Laravel)', level: '85%' },
        { name: 'Node.js', level: '80%' }
      ]
    },
    {
      category: 'Database',
      icon: 'fas fa-database',
      skills: [
        { name: 'MySQL', level: '85%' }
      ]
    },
    {
      category: 'Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: '90%' },
        { name: 'GitHub', level: '90%' },
        { name: 'REST APIs', level: '85%' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills animated">
      <div className="container">
        <h2 className="section-title animated gradient-text">My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <Tilt key={index} className="tilt-card" tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1200}>
              <div className="skill-category animated">
              <h3 className="skill-category-title">
                <i className={category.icon}></i> {category.category}
              </h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={skill.level}
                        ref={el => skillRefs.current[`${index}-${skillIndex}`] = el}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;