import React from 'react';
import '../styles/AboutUs.css'; // Adjust the path as necessary

const AboutUs = () => {
  return (
    <section id="about" className="about-section py-5 text-white">
      <div className="container d-flex flex-lg-row flex-column align-items-center justify-content-between">
        {/* Text Content */}
        <div className="text-content mb-4 mb-lg-0 pe-lg-5 flex-grow-1">
          <h2 className="display-4 fw-bold mb-4">About Us</h2>
          <p className="lead mb-3">
            <strong>RevalOps</strong> is your trusted DevOps and CI/CD automation partner. We focus on simplifying complex deployment processes
            through streamlined solutions tailored for modern software teams.
          </p>
          <p className="mb-3">
            Our mission is to enable faster innovation, seamless collaboration, and reliable delivery through industry-best practices,
            automation, and scalable infrastructure. Whether you're a startup or enterprise, our platform helps you build, test, and ship
            with confidence.
          </p>
          <p>
            RevalOps stands at the intersection of innovation and execution—turning your DevOps challenges into competitive advantages.
          </p>
        </div>

        {/* Image Content */}
        <div className="image-content flex-grow-1">
          <img
            src="images/logo.png"
            alt="About Us"
            className="rounded-lg shadow-lg img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
