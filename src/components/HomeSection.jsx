import React, { useEffect, useState } from 'react';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import InfoBar from './InfoBar';

const HomeSection = () => {
  const [infoBar, setInfoBar] = useState(false);
  const [activeSection, setActiveSection] = useState('About'); // Default section
  
  useEffect(() => {

    // Typing effect for exampleText
    const date = new Date();
    const exampleText = [
      "HELLO",
      "WEB DEVELOPER💻",
      "BACKEND🖲️",
      `${date.getHours()} O' CLOCK`,
      "ANIME",
      "CRICKET",
      "SWIMMING🏊‍♀️",
      "LEARNER🚀",
      // "PURE VEG🟩",
      "READING📚",
    ];
    let index = 0;
    const element = document.getElementById('element');

    const typeText = () => {
      if (element && index < exampleText.length) {
        element.textContent = exampleText[index];
        index++;
      } else {
        index = 0;
      }
    };

    const intervalId = setInterval(typeText, 3000); // Update text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

// console.log(infoBar )
  return (
    <section className={`w-screen max-h-screen landing-background`}>
      <div  className={`info-bar  ${infoBar == true ? 'visible ' : 'w-full '}`}>
          {
            infoBar ? <InfoBar infoBar={infoBar} setInfoBar={setInfoBar} activeSection={activeSection} setActiveSection={setActiveSection}/> : null
          }

      </div>
      <div>
        <div className=' text-white'>
          {/* Intro */}
          <div className={`intro-block ${infoBar ? ' reverse' : ' '}`}>
            <div className={`intro-block-container  text-white ${infoBar ? '  reverse' : ' '}`}>
              <span >Hi, I'm</span>
              <h1 className='text-left text-white'>nikhilSharma</h1>

              <h2 id='element' className='text-white'></h2>

              <ul className="social">
                <li className='social-icon text-white' title='My Linkedin'><a href="https://www.linkedin.com/in/nikhil-sharma-496680279/" target="_blank"><Linkedin color='white'/></a></li>
                <li className='social-icon text-white' title='My Github'><a href="https://github.com/nikhilsharma270027" target="_blank"><Github color='white'/></a></li>
                <li className='social-icon text-white' title='My Facebook'><a href="" target='_self'><Facebook color='white'/></a></li>
                <li className='social-icon text-white' title='My Instagram'><a href="https://www.instagram.com/_.hr.16._" target="_blank"><Instagram color='white'/></a></li>
              </ul>

              <div className='pt-4'>
              <a 
                href="/Nikhil sharma (Full stack developer) (1).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg font-semibold shadow-md backdrop-blur-md bg-white/1 hover:bg-white/20 transition duration-300"
            >
                Download Resume
            </a>



              </div>
            </div>
          </div>
          {/* Intro */}


          {/* About */}
          <div className='about-block '>
            <div onClick={() => {setInfoBar((prev) => !prev), setActiveSection('About') }} className='about-block-container cursor-pointer'>
                <h2 className='about menu-item'>About</h2>
            </div>
          </div>
          {/* About */}


          {/* About */}
          <div className='project-block'>
            <div onClick={() => {setInfoBar((prev) => !prev), setActiveSection('Projects') }} className='project-block-container cursor-pointer'>
                <h2 className="project menu-item">Project</h2>
            </div>
          </div>  
          {/* About */}


          {/* skills */}
          <div className='skill-block'>
            <div onClick={() => {setInfoBar((prev) => !prev), setActiveSection('Skills') }} className='skill-block-container cursor-pointer'>
                <h2 className="skill menu-item">Skills</h2>
            </div>
          </div>  
          {/* skills */}


          {/* Contact */}
          <div className='contact-block'>
            <div onClick={() => {setInfoBar((prev) => !prev), setActiveSection('Contact') }} className='contact-block-container cursor-pointer'>
                <h2 className="contact menu-item">Contact</h2>
            </div>
          </div>  
          {/* Contact */}
          
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
