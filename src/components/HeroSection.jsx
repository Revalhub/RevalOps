import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css'; // Adjust the path as necessary

const devOpsImages = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % devOpsImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${devOpsImages[currentImage]})` }}
      />
      <div className="hero-content">
        <h1 className="hero-title">RevalOps</h1>
        <p className="lead fs-4">Automate Smart. Scale Fast.</p>
        <p className="hero-subtitle">Simplifying DevOps, Automating Success</p>
      </div>

      {/* Preload images to prevent flickering */}
      {devOpsImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          style={{ display: 'none' }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
