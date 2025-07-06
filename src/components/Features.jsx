import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'bi bi-diagram-3',
      title: 'CI/CD Pipelines',
      description:
        'Streamline your software delivery with automated build, test, and deployment workflows for faster and more reliable releases.',
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Infrastructure as Code',
      description:
        'Manage infrastructure using code to ensure consistency, version control, and rapid provisioning across environments.',
    },
    {
      icon: 'bi bi-bell-fill',
      title: 'Monitoring & Alerts',
      description:
        'Stay ahead of issues with real-time monitoring, smart alerting, and proactive incident management.',
    },
    {
      icon: 'bi bi-cloud-arrow-up-fill',
      title: 'Cloud-Native Development',
      description:
        'Leverage containers, microservices, and Kubernetes to build scalable, resilient, and cloud-optimized applications.',
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
