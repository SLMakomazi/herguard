import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Add all Font Awesome solid icons to the library
library.add(fas);

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Products />
              <Testimonials />
              <Contact />
            </>
          } />
          {/* Add more routes as needed */}
          <Route path="*" element={
            <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>Sorry, the page you're looking for doesn't exist.</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
