import React from "react";
import { motion } from "framer-motion"; // Using Framer Motion for animation
import profileImg from "../assets/ashil.jpg";
function About() {
  return (
    <motion.section
      id="about"
      className="about-section container my-5"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row">
        <div className="col-md-6 about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate and versatile Full Stack Developer with a strong
            background in building dynamic and responsive web applications. With
            a comprehensive skill set covering both front-end and back-end
            development, I enjoy the process of creating seamless user
            experiences while ensuring robust and scalable server-side
            solutions. Proficient in technologies like HTML, CSS, JavaScript,
            and modern frameworks such as React for front-end development, I am
            equally experienced in back-end technologies like Node.js, Express,
            and databases like MongoDB and SQL. My ability to work across the
            full development stack allows me to bridge the gap between design
            and technical implementation, delivering well-rounded,
            high-performance applications. I thrive in collaborative
            environments, continuously improving my skills through
            problem-solving and learning new tools and technologies. My goal is
            to contribute to innovative projects, turning complex requirements
            into functional, user-friendly applications that solve real-world
            problems.
          </p>
        </div>
        <div className="col-md-6 position-relative profile-container">
          <div className="card">
            <img
              src={profileImg}
              alt="About me"
              className="img-fluid rounded shadow-lg"
              width={400}
              height={450}
            />
            <div className="card-blur"></div>
            <div className="footer">
              <div className="connections">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connection instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashil-rahim-aa34a3305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connection linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/ashilrahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connection github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className="info">
                <div className="name">Ashil Rahim C K</div>
                <div className="job">Full Stack Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
