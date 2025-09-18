import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt,
  faEnvelope,
  faMapMarkerAlt,
  faChevronRight,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faPinterestP, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
  FaApple,
  FaGoogle
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Safety Tips', path: '/safety-tips' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact' }
  ];
  
  const products = [
    { name: 'Personal Alarms', path: '/products/personal-alarms' },
    { name: 'Pepper Sprays', path: '/products/pepper-sprays' },
    { name: 'Stun Guns', path: '/products/stun-guns' },
    { name: 'Safety Whistles', path: '/products/safety-whistles' },
    { name: 'Self-Defense Keychains', path: '/products/self-defense-keychains' },
    { name: 'Gift Cards', path: '/products/gift-cards' }
  ];
  
  const customerService = [
    { name: 'My Account', path: '/my-account' },
    { name: 'Order Tracking', path: '/track-order' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Return Policy', path: '/return-policy' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' }
  ];
  
  const contactInfo = [
    { 
      icon: faMapMarkerAlt, 
      text: '123 Safety Ave, Suite 100, San Francisco, CA 94107' 
    },
    { 
      icon: faPhone, 
      text: '+1 (800) 555-1234',
      link: 'tel:+18005551234'
    },
    { 
      icon: faEnvelope, 
      text: 'hello@herguard.com',
      link: 'mailto:hello@herguard.com'
    }
  ];
  
  const socialLinks = [
    { icon: faFacebookF, url: 'https://facebook.com/herguard' },
    { icon: faTwitter, url: 'https://twitter.com/herguard' },
    { icon: faInstagram, url: 'https://instagram.com/herguard' },
    { icon: faPinterestP, url: 'https://pinterest.com/herguard' },
    { icon: faYoutube, url: 'https://youtube.com/herguard' }
  ];
  
  const paymentMethods = [
    { id: 'visa', component: FaCcVisa },
    { id: 'mastercard', component: FaCcMastercard },
    { id: 'amex', component: FaCcAmex },
    { id: 'paypal', component: FaPaypal },
    { id: 'apple-pay', component: FaApple },
    { id: 'google-pay', component: FaGoogle }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col footer-about">
              <div className="footer-logo">
                <FontAwesomeIcon icon={faShieldAlt} className="logo-icon" />
                <span className="logo-text">
                  <span className="her">HER</span><span className="guard">GUARD</span>
                </span>
              </div>
              <p className="about-text">
                Empowering women with discreet, reliable self-defense tools for confidence in every step. 
                Your safety is our priority.
              </p>
              
              <div className="footer-contact">
                {contactInfo.map((item, index) => (
                  <div className="contact-item" key={index}>
                    <FontAwesomeIcon icon={item.icon} className="contact-icon" />
                    {item.link ? (
                      <a href={item.link} className="contact-link">{item.text}</a>
                    ) : (
                      <span className="contact-text">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.icon.iconName}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <Link to={link.path} className="footer-link">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-title">Our Products</h3>
              <ul className="footer-links">
                {products.map((product, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <Link to={product.path} className="footer-link">{product.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-title">Customer Service</h3>
              <ul className="footer-links">
                {customerService.map((service, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <Link to={service.path} className="footer-link">{service.name}</Link>
                  </li>
                ))}
              </ul>
              
              <div className="newsletter">
                <h4 className="newsletter-title">Newsletter</h4>
                <p className="newsletter-text">Subscribe to get updates on new products and offers</p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your email address" 
                      required 
                    />
                    <button type="submit" className="subscribe-btn">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Her Guard. All Rights Reserved.
            </p>
            
            <div className="payment-methods">
              {paymentMethods.map((method) => {
                const Icon = method.component;
                return (
                  <div className="payment-method" key={method.id}>
                    <Icon size={24} title={method.id.replace('-', ' ')} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
