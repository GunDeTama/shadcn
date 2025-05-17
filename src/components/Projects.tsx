import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'API Gateway',
    description: 'ระบบ API Gateway สำหรับจัดการและควบคุม API หลายตัวในองค์กร',
    link: '#',
  },
  {
    name: 'DevOps Automation',
    description: 'ระบบอัตโนมัติสำหรับ CI/CD Pipeline ด้วย Docker และ GitHub Actions',
    link: '#',
  },
];

const Projects: React.FC = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projects.map((proj, idx) => (
        <div key={idx} className="project-card">
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 