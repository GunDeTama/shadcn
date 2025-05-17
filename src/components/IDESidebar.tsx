import React from 'react';
import './IDESidebar.css';

const files = [
  { key: 'about', label: 'AboutMe.tsx' },
  { key: 'skills', label: 'Skills.tsx' },
  { key: 'experience', label: 'Experiences.tsx' },
  // { key: 'projects', label: 'Projects.tsx' }, // Hidden
  { key: 'contact', label: 'Contact.tsx' },
];

interface IDESidebarProps {
  selected: string;
  onSelect: (key: string) => void;
}

const IDESidebar: React.FC<IDESidebarProps> = ({ selected, onSelect }) => (
  <aside className="ide-sidebar">
    <div className="sidebar-title">EXPLORER</div>
    <ul>
      {files.map(f => (
        <li
          key={f.key}
          className={selected === f.key ? 'active' : ''}
          onClick={() => onSelect(f.key)}
        >
          <span className="file-icon">📄</span> {f.label}
        </li>
      ))}
    </ul>
  </aside>
);

export default IDESidebar; 