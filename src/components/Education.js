import React from 'react';


function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        <p className="text-center section-subtitle">Here is a summary of my academic background:</p>

        <div className="education-timeline">
          {/* Add your education details here */}
          <div className="education-item">
            <h4 className="degree">Bachelor's Degree in Computer Science</h4>
            <h5 className="school">Calicut University</h5>
            <p className="education-dates">Graduated: 2024</p>
          </div>

          {/* Add more education items as needed */}
        </div>
      </div>
    </section>
  );
}

export default Education;
