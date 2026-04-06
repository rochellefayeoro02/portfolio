// Add this to your App component (updated version with scroll visibility)
import { useState, useEffect, useRef } from 'react';
import './App.css';
import './styles.css';
import Navbar from '../components/navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  const [activePage, setActivePage] = useState('Home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const contentRef = useRef(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activePage]);

  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':     return <Home setActivePage={setActivePage} />;
      case 'About':    return <About />;
      case 'Projects': return <Projects />;
      case 'Skills':   return <Skills />;
      case 'Contact':  return <Contact />;
      default:         return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="portfolio-wrapper">
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Sticky Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Page Content */}
      <div className="page-content" ref={contentRef}>
        {renderPage()}
      </div>

      {/* Back to Top Button - appears after scrolling */}
      <button 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
        aria-label="Back to top"
      >
        <span className="back-to-top-arrow">↑</span>
      </button>
    </div>
  );
}

export default App;