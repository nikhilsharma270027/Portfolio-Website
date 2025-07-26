import React, { useEffect, useState } from 'react';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import InfoBar from './InfoBar';
import ReactGA from "react-ga4"; // 👈 Import ReactGA

const HomeSection = () => {
  const [infoBar, setInfoBar] = useState(false);
  const [activeSection, setActiveSection] = useState('About'); // Default section

  useEffect(() => {
    // Typing effect for exampleText
    const date = new Date();
    const exampleText = [
      "HELLO👋",
      "WEB DEVELOPER💻",
      "BACKEND🖲️",
      `${date.getHours()} O' CLOCK 🕒`,
      "ANIMATION🎞️",
      "CRICKET🏏",
      "SWIMMING🏊‍♀️",
      "LEARNER🚀",
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

  const handleSectionClick = (section) => {
    setInfoBar((prev) => !prev);
    setActiveSection(section);
  
    // Ensure Google Analytics event is being sent
    ReactGA.event({
      category: "Navigation",
      action: `Clicked ${section} section`,
      label: section,  // Optional: Helps categorize events
    });
  
    // console.log(`GA Event Fired: Clicked ${section} section`);  // Debugging
  };
  

  return (
    <section className={`w-screen max-h-screen landing-background`}>
      <div className={`info-bar ${infoBar ? 'visible' : 'w-full'}`}>
        {infoBar && (
          <InfoBar
            infoBar={infoBar}
            setInfoBar={setInfoBar}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}
      </div>

      <div>
        <div className='text-white'>
          {/* Intro */}
          <div className={`intro-block ${infoBar ? 'reverse' : ''}`}>
            <div className={`intro-block-container text-white ${infoBar ? 'reverse' : ''}`}>
              <span>Hi, I'm</span>
              <h1 className='text-left text-white'>nikhilSharma</h1>
              <h2 id='element' className='text-white'></h2>

              <ul className="social">
                <li className='social-icon text-white' title='My Linkedin'>
                  <a href="https://www.linkedin.com/in/nikhil-sharma-496680279/" target="_blank">
                    <Linkedin color='white' />
                  </a>
                </li>
                <li className='social-icon text-white' title='My Github'>
                  <a href="https://github.com/nikhilsharma270027" target="_blank">
                    <Github color='white' />
                  </a>
                </li>
                <li className='social-icon text-white' title='My Facebook'>
                  <a href="#" target='_self'>
                    <Facebook color='white' />
                  </a>
                </li>
                <li className='social-icon text-white' title='My Instagram'>
                  <a href="https://www.instagram.com/_.hr.16._" target="_blank">
                    <Instagram color='white' />
                  </a>
                </li>
              </ul>

              <div className='pt-8 mb-8'>
                <a
                  href="/Nikhil_Sharma ( Frontend developer ).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg font-semibold shadow-md backdrop-blur-md bg-white/10 hover:bg-white/20 transition duration-300"
                  className="glow-button"
                  onClick={() => {
                    ReactGA.event({
                      category: "User",
                      action: "Downloaded Resume",
                      label: "Resume PDF",
                      value: 1, // Optional: track how many times it's clicked
                    });
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* Intro */}

          {/* About */}
          <div className='about-block'>
            <div onClick={() => handleSectionClick('About')} className='about-block-container cursor-pointer'>
              <h2 className='about menu-item'>About</h2>
            </div>
          </div>
          {/* About */}

          {/* Projects */}
          <div className='project-block'>
            <div onClick={() => handleSectionClick('Projects')} className='project-block-container cursor-pointer'>
              <h2 className="project menu-item">Projects</h2>
            </div>
          </div>
          {/* Projects */}

          {/* Skills */}
          <div className='skill-block'>
            <div onClick={() => handleSectionClick('Skills')} className='skill-block-container cursor-pointer'>
              <h2 className="skill menu-item">Skills</h2>
            </div>
          </div>
          {/* Skills */}

          {/* Contact */}
          <div className='contact-block'>
            <div onClick={() => handleSectionClick('Contact')} className='contact-block-container cursor-pointer'>
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
