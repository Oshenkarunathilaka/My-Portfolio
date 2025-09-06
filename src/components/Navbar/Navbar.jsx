import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">Oshen Karunathilaka</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          {navItems.map((item, index) => (
            <li key={item.name} className="navbar-item">
              <a 
                href={item.href} 
                className="navbar-link"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                {item.name}
                <span className="link-underline"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="cta-button">
            <span className="button-text">Hire Me</span>
            <div className="button-bg"></div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-items">
          {navItems.map((item, index) => (
            <li key={item.name} className="mobile-menu-item">
              <a 
                href={item.href} 
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ '--mobile-delay': `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="mobile-menu-item">
            <button 
              className="mobile-cta-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>

      {/* Animated Background Elements */}
      <div className="navbar-bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
    </nav>
  );
};

export default Navbar;