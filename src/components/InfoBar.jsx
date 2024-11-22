import { X } from 'lucide-react';
import React, { useState } from 'react';
import About from './About';
import Projects from './Project';
import Skills from './Skill';
import Contact from './Contact';

const InfoBar = ({ InfoBar, setInfoBar ,activeSection, setActiveSection}) => { 
  // const [activeSection, setActiveSection] = useState('About'); // Default section

  return (
    <div className="h-full bg-white text-black overflow-y-scroll">
      {/* Navbar */}
      <div className="sticky top-0 bg-gray-100 p-4 flex justify-around items-center shadow-lg z-10">
        <p className="status ">Available</p>

        {/* Navigation Buttons */}
        <button
          onClick={() => setActiveSection('About')}
          className={`${
            activeSection === 'About' ? 'bg-blue-700' : 'bg-blue-500'
          } text-white px-4 py-2 rounded hover:scale-105 transition-transform`}
        >
          About
        </button>
        <button
          onClick={() => setActiveSection('Projects')}
          className={`${
            activeSection === 'Projects' ? 'bg-green-700' : 'bg-green-500'
          } text-white px-4 py-2 rounded hover:scale-105 transition-transform`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveSection('Skills')}
          className={`${
            activeSection === 'Skills' ? 'bg-yellow-700' : 'bg-yellow-500'
          } text-white px-4 py-2 rounded hover:scale-105 transition-transform`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection('Contact')}
          className={`${
            activeSection === 'Contact' ? 'bg-red-700' : 'bg-red-500'
          } text-white px-4 py-2 rounded hover:scale-105 transition-transform`}
        >
          Contact
        </button>
        <button className='' onClick={() => setInfoBar((prev) => !prev)}>
          <X size={28} color="black" strokeWidth={3} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 overflow-y-auto">
        {activeSection === 'About' && <About />}
        {activeSection === 'Projects' && <Projects />}
        {activeSection === 'Skills' && <Skills />}
        {activeSection === 'Contact' && <Contact />}
      </div>
    </div>
  );
};

export default InfoBar;
