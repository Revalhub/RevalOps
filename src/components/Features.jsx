import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'bi bi-gear-wide-connected',
      title: 'DevOps, Automation & Observability',
      description:
        'Implement DevOps practices to automate infrastructure, CI/CD pipelines, and monitoring. Gain visibility into systems with integrated logging, alerting, and performance tracking for faster, more reliable operations.',
    },
    {
      icon: 'bi bi-cloud-arrow-up-fill',
      title: 'Cloud-Native Development and Migration',
      description:
        'Accelerate your digital transformation by migrating applications to the cloud, adopting containerization, and implementing microservices using Kubernetes and serverless technologies.',
    },
    {
      icon: 'bi bi-hdd-network',
      title: 'Infrastructure, Database & ETL Services',
      description:
        'Design scalable infrastructure, manage relational and NoSQL databases, and build ETL pipelines for seamless data movement, transformation, and integration.',
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Security & Compliance Automation',
      description:
        'Automate security best practices, implement policy-as-code, and ensure compliance with industry standards like SOC 2, HIPAA, and GDPR throughout your DevOps lifecycle.',
    },
  ];

  return (
    <section id="features" className="container py-5">
      <h2 className="text-center mb-5">Our Key Features</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="mb-3 text-primary">
              <i className={`${feature.icon}`} style={{ fontSize: '2rem' }}></i>
            </div>
            <h5 className="fw-bold mb-2">{feature.title}</h5>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
