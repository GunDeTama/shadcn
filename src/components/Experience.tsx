import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'JSD Generation',
    role: 'Final Group Project',
    period: '',
    details: [
      'Built an e-commerce site using React, Tailwind, and Vite',
      'Collaborated with team in an Agile environment to solve problems and meet project deadlines',
      'Responsible for Dashboard, About Us, and Contact Us sections',
    ],
  },
];

const education = [
  {
    year: '2025',
    place: 'Generation Thailand',
    desc: 'Junior Software Developer Bootcamp',
  },
  {
    year: '2023',
    place: 'Eastern College of Technology (E-Tech), Chonburi',
    desc: 'Vocational Certificate in Business Computer',
  },
];

const Experience: React.FC = () => (
  <section className="experience">
    <h2>Project Experience</h2>
    {experiences.map((exp, idx) => (
      <div key={idx} className="job">
        <h3>{exp.role} @ {exp.company}</h3>
        <ul>
          {exp.details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
    ))}
    <h2>Education</h2>
    {education.map((edu, idx) => (
      <div key={idx} className="job">
        <h3>{edu.year} - {edu.place}</h3>
        <span>{edu.desc}</span>
      </div>
    ))}
  </section>
);

export default Experience; 