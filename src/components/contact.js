import React from 'react';


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
