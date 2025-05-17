import React from 'react';
import './Skills.css';

const hardSkills = [
  'Golang',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Vite',
  'Git',
  'GitHub',
  'Postman',
  'Docker',
  'DBeaver',
  'MongoDB Compass',
  'MySQL',
  'MongoDB',
];

const softSkills = [
  'Teamwork',
  'Problem solving',
  'Adaptability',
  'Friendly',
  'Polite',
  'Respectful',
  'Communication',
  'Time management',
];

const Skills: React.FC = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skills-flex">
      <div>
        <h3>Hard Skills</h3>
        <ul>
          {hardSkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
      <div>
        <h3>Soft Skills</h3>
        <ul>
          {softSkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills; 