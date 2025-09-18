import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'College Student',
      content: "The Guardian Alarm Keychain has given me so much peace of mind when walking to my car at night. It's loud enough to startle anyone with bad intentions and draw attention to my location.",
      rating: 5,
      image: 'https://placehold.co/100x100/f5f0ff/7F6599/png?text=User'
    },
    {
      id: 2,
      name: 'Emily Chen',
      role: 'Nurse',
      content: "As someone who works night shifts, I feel much safer with the Pepper Spray Defender in my pocket. It's compact, easy to use, and gives me confidence during my late-night commutes.",
      rating: 5,
      image: 'https://placehold.co/100x100/f5f0ff/7F6599/png?text=User'
    },
    {
      id: 3,
      name: 'Michaela Rodriguez',
      role: 'Runner',
      content: "The Stun Gun Flashlight is a game-changer for my early morning runs. It's bright, powerful, and makes me feel protected without being bulky or heavy to carry.",
      rating: 4,
      image: 'https://placehold.co/100x100/f5f0ff/7F6599/png?text=User'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Father',
      content: "I bought the Personal Safety Whistle for my daughter when she went off to college. It's simple, effective, and gives me peace of mind knowing she has a way to call for help if needed.",
      rating: 5,
      image: 'https://placehold.co/100x100/f5f0ff/7F6599/png?text=User'
    },
    {
      id: 5,
      name: 'Aisha Williams',
      role: 'Frequent Traveler',
      content: 'The variety of safety products from Her Guard is impressive. I always keep their alarm in my travel bag. The customer service is excellent too!',
      rating: 5,
      image: 'https://placehold.co/100x100/f5f0ff/7F6599/png?text=User'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            Don't just take our word for it. Hear from women who have taken charge of their safety with Her Guard.
          </p>
        </div>
        
        <div className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-quote">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <p className="testimonial-content">{testimonial.content}</p>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i}
                    icon={faStar}
                    className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                  />
                ))}
              </div>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    src={`/images/testimonials/${testimonial.image}`} 
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://ui-avatars.com/api/?name=' + 
                        encodeURIComponent(testimonial.name) + 
                        '&background=7F6599&color=fff';
                    }}
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === 0 ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
