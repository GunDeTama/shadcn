import React from 'react';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import './IDEMainArea.css';

interface IDEMainAreaProps {
  selected: string;
}

const IDEMainArea: React.FC<IDEMainAreaProps> = ({ selected }) => {
  return (
    <main className="ide-main-area">
      {selected === 'about' && <About />}
      {selected === 'skills' && <Skills />}
      {selected === 'experience' && <Experience />}
      {/* {selected === 'projects' && <Projects />} */}
      {selected === 'contact' && <Contact />}
    </main>
  );
};

export default IDEMainArea; 