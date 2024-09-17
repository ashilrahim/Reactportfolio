import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/project';
import Contact from './components/contact';
import { Link } from 'react-scroll';
import HERO from './components/Hero';
import Knowledge from './components/Knowledge';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Education from './components/Education';


function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="top" className="App">
      <header className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm ${navbarScrolled ? 'navbar-scrolled' : ''}`}>
      <Link 
          className="navbar-brand" 
          to="top"  // Updated here
          smooth={true} 
          duration={500} 
          pointer
        >
          Home
        </Link>
        <button 
          className={`navbar-toggler ${navbarOpen ? '' : 'collapsed'}`} 
          type="button" 
          aria-expanded={navbarOpen ? 'true' : 'false'}
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
          <nav className="navbar-nav ml-auto">
            <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
            <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
            <Link className="nav-link" to="knowledge" smooth={true} duration={500}>Knowledge</Link>
            <Link className="nav-link" to="education" smooth={true} duration={500}>Education</Link>
            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
          </nav>
        </div>
      </header>

      <HERO />

      <main className="pt-5">
        <About />
        <Projects />
        <Knowledge />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
