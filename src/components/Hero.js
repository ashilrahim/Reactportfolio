import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Ashil Rahim C K</h1>
        <p className="hero-subtitle">I am a Full Stack Web Developer passionate about creating stunning web experiences.</p>
        <Link
          to="projects" // Target the "Projects" section
          smooth={true} // Enable smooth scrolling
          duration={500} // Scrolling duration in milliseconds
          className="btn btn-hero"
        >
          Explore My Work
        </Link>
      </div>
    </section>
  );
}

export default Hero;
