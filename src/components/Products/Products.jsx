import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Guardian Alarm Keychain',
      description: 'Personal safety alarm with loud 140dB siren',
      features: ['140dB alarm', 'Keychain design', 'Easy activation'],
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop&crop=faces&q=60',
      category: 'Alarms'
    },
    {
      id: 2,
      name: 'Pepper Spray Defender',
      description: 'Compact and effective pepper spray for personal protection',
      features: ['Compact size', 'Quick release', 'Range up to 8 feet'],
      rating: 4.9,
      reviews: 215,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop&crop=faces&q=60',
      category: 'Defense'
    },
    {
      id: 3,
      name: 'Stun Gun Flashlight',
      description: 'Dual-purpose stun gun with bright LED flashlight',
      features: ['1 Million Volts', 'LED Flashlight', 'Rechargeable'],
      rating: 4.7,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop&crop=faces&q=60',
      category: 'Defense'
    },
    {
      id: 4,
      name: 'Personal Safety Whistle',
      description: 'Loud emergency whistle for attracting attention',
      features: ['120dB sound', 'Weather resistant', 'Lightweight design'],
      rating: 4.5,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop&crop=faces&q=60',
      category: 'Accessories'
    }
  ];

  const viewDetails = (product) => {
    // View details functionality would go here
    console.log('Viewing details for:', product.name);
  };

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Safety Products</h2>
          <p>Discover our range of personal safety products designed for your protection</p>
          <p className="disclaimer">* Products shown are for display purposes only. Please contact us for purchasing information.</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={faStar} 
                        className={i < Math.floor(product.rating) ? 'filled' : ''} 
                      />
                    ))}
                  </div>
                  <span className="review-count">({product.reviews} reviews)</span>
                </div>
                <button 
                  className="view-details"
                  onClick={() => viewDetails(product)}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn">
            View All Products
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
