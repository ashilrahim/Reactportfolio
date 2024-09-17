import React from 'react';


function Knowledge() {
  return (
    <section id="knowledge" className="knowledge-section">
      <div className="container">
        <h2 className="section-title text-center">My Knowledge</h2>
        <p className="text-center section-subtitle">I have hands-on experience with the following technologies:</p>
        
        <div className="knowledge-grid">
          <div className="knowledge-item">
            <i className="fab fa-html5 knowledge-icon"></i>
            <h4>HTML</h4>
            <p>Building semantic and accessible web pages.</p>
          </div>

          <div className="knowledge-item">
            <i className="fab fa-css3-alt knowledge-icon"></i>
            <h4>CSS</h4>
            <p>Designing responsive layouts and modern UI styles.</p>
          </div>

          <div className="knowledge-item">
            <i className="fab fa-js-square knowledge-icon"></i>
            <h4>JavaScript</h4>
            <p>Creating dynamic and interactive user experiences.</p>
          </div>

          <div className="knowledge-item">
            <i className="fab fa-react knowledge-icon"></i>
            <h4>React</h4>
            <p>Building scalable and performant web applications.</p>
          </div>

          <div className="knowledge-item">
            <i className="fab fa-git-alt knowledge-icon"></i>
            <h4>Git</h4>
            <p>Version control for efficient team collaboration.</p>
          </div>

          <div className="knowledge-item">
            <i className="fab fa-github knowledge-icon"></i>
            <h4>GitHub</h4>
            <p>Hosting code repositories and managing projects.</p>
          </div>

          <div className="knowledge-item">
            <i className="fab fa-bootstrap knowledge-icon"></i>
            <h4>Bootstrap</h4>
            <p>Creating responsive layouts with a powerful grid system.</p>
          </div>

          <div className="knowledge-item">
            <i className="fab fa-node knowledge-icon"></i>
            <h4>Node.js</h4>
            <p>Server-side JavaScript for building scalable applications.</p>
          </div>

          <div className="knowledge-item">
            <i className="fas fa-database knowledge-icon"></i>
            <h4>MongoDB</h4>
            <p>Working with NoSQL databases for flexible data storage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Knowledge;
