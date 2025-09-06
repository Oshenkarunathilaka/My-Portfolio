import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="wave1">👋</span>
            <span className="greeting-text">Hi, I'm</span>
          </div>
          
          <h1 className="hero-name">
            <span className="name-text">Oshen Karunathilaka</span>
            <div className="name-underline"></div>
          </h1>
          
          <div className="hero-title">
            <span className="title-text">UX/UI Designer & </span>
            <span className="title-text gradient-text">Fullstack Developer</span>
          </div>
          
          <p className="hero-description">
            Crafting digital experiences that blend beautiful design with powerful functionality.
            Passionate about creating user-centered solutions that make a difference.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <span className="btn-text">Resume</span>
              <div className="btn-shine"></div>
            </button>
            <button className="btn btn-secondary">
              <span className="btn-text">Connect with me</span>
              <div className="btn-glow"></div>
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-container">
            <div className="profile-ring"></div>
            <div className="profile-image">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"creative"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;