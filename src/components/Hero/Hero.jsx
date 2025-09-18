import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Safety, <span className="highlight">Our Priority</span>
          </h1>
          <p className="hero-subtitle">
            Empowering women with discreet, reliable self-defense tools for confidence in every step.
          </p>
          <div className="hero-cta">
            <Link to="/products" className="cta-button primary">
              Shop Now
              <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
            </Link>
            <Link to="/learn" className="cta-button secondary">
              Learn Self-Defense
            </Link>
          </div>
          <div className="hero-features">
            <div className="feature">
              <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
              <span>Discreet Protection</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
              <span>Easy to Carry</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
              <span>Instant Activation</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/heroImage.png" 
            alt="Woman feeling safe and confident"
            className="hero-img"
          />
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#ffffff" 
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
