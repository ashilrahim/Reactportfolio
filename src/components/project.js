import React from 'react';
import { motion } from 'framer-motion';
import Double from '../assets/double.jpg'
import Plants from '../assets/plants.jpg'
import Drum from '../assets/Drum.jpg'
function Projects() {
  return (
    <section id="projects" className="projects-section container my-5">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <motion.div 
          className="col-md-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card project-card shadow-lg">
            <img src={Double} className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Double cheese&Bacon</h5>
              <p className="card-text">A Responsive Website using Bootstrap.</p>
              <a href="" target="_blank" rel="noopener noreferrer" className="project-link">
              <p className="card-view1">View This Webpage<i className="fas fa-arrow-right"></i></p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          className="col-md-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card project-card shadow-lg">
            <img src={Plants} className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Plants</h5>
              <p className="card-text">A Responsive Website using Bootstrap.</p>
              <a href="https://ashilrahim.github.io/Plants/" target="_blank" rel="noopener noreferrer" className="project-link">
              <p className="card-view1">View This Webpage<i className="fas fa-arrow-right"></i></p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div 
          className="col-md-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          
          <div className="card project-card shadow-lg">
            <img src={Drum} className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Drum Kit</h5>
              <p className="card-text">A Drum kit project using vanilla JavaScript</p>
              <a href="https://ashilrahim.github.io/Drum/" target="_blank" rel="noopener noreferrer" className="project-link">
              <p className="card-view">View This Webpage<i className="fas fa-arrow-right"></i></p>
              </a>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
