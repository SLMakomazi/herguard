import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faShieldAlt, 
  faLightbulb, 
  faHeart,
  faLeaf,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: faShieldAlt,
      title: 'Advanced Protection',
      description: 'Engineered with cutting-edge technology to provide reliable safety when you need it most.'
    },
    {
      icon: faBell,
      title: 'Loud Alarms',
      description: '130+ decibel personal alarms to deter threats and attract attention in emergencies.'
    },
    {
      icon: faLightbulb,
      title: 'Smart Features',
      description: 'Integrated with smart technology for easy activation and immediate response.'
    },
    {
      icon: faHeart,
      title: 'Designed for You',
      description: 'Created by women, for women, with your unique safety needs in mind.'
    },
    {
      icon: faLeaf,
      title: 'Eco-Friendly',
      description: 'Sustainable materials that don\'t compromise on safety or style.'
    },
    {
      icon: faLock,
      title: 'Secure & Private',
      description: 'Your safety is our priority, with no data collection or privacy concerns.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Why Choose Her Guard</span>
          <h2 className="section-title">Safety Features You Can Trust</h2>
          <p className="section-description">
            Our products are designed with your safety and peace of mind as the top priority.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-container">
                <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
