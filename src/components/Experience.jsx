import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React and Node.js. Mentored junior developers and improved system performance by 40%.'
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Digital Creations Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained client websites and applications using PHP, Laravel, and JavaScript. Collaborated with design teams to implement responsive UIs.'
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Built responsive websites and implemented backend services for various clients. Worked with MySQL databases and RESTful APIs.'
    }
  ];

  const certifications = [
    { id: 1, title: 'Laravel Certification', issuer: 'Laravel.org' },
    { id: 2, title: 'React Advanced Concepts', issuer: 'Udemy' },
    { id: 3, title: 'Full-Stack Web Development', issuer: 'Coursera' }
  ];

  return (
    <section id="experience" className="experience animated">
      <div className="container">
        <h2 className="section-title animated">Experience & Certifications</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item animated">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-date">{exp.period}</p>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
          
          <div className="certifications">
            <h3 className="section-subtitle">Certifications</h3>
            <div className="cert-list">
              {certifications.map(cert => (
                <div key={cert.id} className="cert-item animated">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;