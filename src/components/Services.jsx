import React from 'react';
import '../styles/Services.css'; // Make sure this path matches your folder structure

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          We provide end-to-end DevOps services designed to streamline your software delivery lifecycle.
          Our offerings include robust CI/CD pipeline implementation, infrastructure automation using IaC tools,
          cloud-native application development, container orchestration with Docker and Kubernetes, and scalable
          monitoring and alerting solutions. Whether you're modernizing legacy systems or building new microservices,
          RevalOps accelerates your deployment with reliability, security, and speed.
        </p>
      </div>
    </section>
  );
};

export default Services;
