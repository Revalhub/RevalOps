// Revalops - React Landing Page with Particle Background


// Revalops - React Landing Page without Particles

import React from 'react';
import './styles/index.css';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gradient text-dark min-vh-100 d-flex flex-column">
      {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="logo.png"
            alt="RevalOps Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          RevalOps
            </a>
            <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
            >
          <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
            </div>
          </div>
        </nav>

        {/* Sections */}
      <div id="home" className="pt-5 mt-5">
        <HeroSection />
      </div>
      <div id="features" className="py-5">
        <Features />
      </div>
      <Services />
      <div id="about" className="py-5">
        <AboutUs />
      </div>
      <div id="contact" className="py-5">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;

