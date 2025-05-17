import React, { useState } from 'react';
import './App.css'
import IDESidebar from './components/IDESidebar'
import IDEMainArea from './components/IDEMainArea'

const fileLabels: Record<string, string> = {
  about: 'AboutMe.tsx',
  skills: 'Skills.tsx',
  experience: 'Experiences.tsx',
  contact: 'Contact.tsx',
};

function App() {
  const [selected, setSelected] = useState('about');

  return (
    <>
      <div className="ide-titlebar">
        <span style={{fontWeight: 700, color: '#7ecfff', marginRight: 8}}>●</span>
        Portfolio <span style={{margin: '0 8px'}}>&gt;</span> anawat_pumunkid <span style={{margin: '0 8px'}}>&gt;</span> {fileLabels[selected]}
      </div>
      <div className="ide-root">
        <IDESidebar selected={selected} onSelect={setSelected} />
        <IDEMainArea selected={selected} />
      </div>
    </>
  )
}

export default App
