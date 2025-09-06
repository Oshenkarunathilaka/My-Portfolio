import React, { useState, useEffect } from "react";
import "./skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillsData = {
    "graphic-design": {
      title: "Graphic Design",
      icon: "🎨",
      color: "purple",
      description: "Creating visually stunning designs that communicate effectively",
      tools: [
        { name: "Adobe Photoshop", level: 85, icon: "🖼️" },
        { name: "Adobe Illustrator", level: 90, icon: "✨" },
        { name: "Canva", level: 95, icon: "🎯" }
      ]
    },
    "ui-design": {
      title: "UI Design",
      icon: "🎯",
      color: "pink",
      description: "Designing intuitive and user-friendly interfaces",
      tools: [
        { name: "Figma", level: 88, icon: "🔥" },
        { name: "Adobe XD", level: 80, icon: "💎" }
      ]
    },
    "web-design": {
      title: "Web Design",
      icon: "🌐",
      color: "yellow",
      description: "Building responsive and modern web experiences",
      tools: [
        { name: "HTML5", level: 95, icon: "🏗️" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "Next.js", level: 80, icon: "🚀" }
      ]
    },
    "wordpress": {
      title: "WordPress Web Design",
      icon: "📱",
      color: "gradient",
      description: "Creating custom WordPress solutions with modern functionality",
      tools: [
        { name: "Custom Themes", level: 85, icon: "🎨" },
        { name: "Plugin Development", level: 75, icon: "🔧" },
        { name: "Responsive Layouts", level: 90, icon: "📱" }
      ]
    }
  };

  const handleSkillHover = (skillId) => {
    setActiveSkill(skillId);
  };

  const handleSkillLeave = () => {
    setActiveSkill(null);
  };

  return (
    <section className={`skills ${isVisible ? 'animate' : ''}`}>
      <div className="skills-background">
        <div className="background-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        <div className="floating-icons">
          <div className="floating-icon icon-1">💻</div>
          <div className="floating-icon icon-2">🎨</div>
          <div className="floating-icon icon-3">🚀</div>
          <div className="floating-icon icon-4">⚛️</div>
          <div className="floating-icon icon-5">🎯</div>
        </div>
      </div>

      <div className="skills-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number"></span>
          <h2 className="section-title">My Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-intro">
          <p>A comprehensive toolkit of technologies and design skills that I use to bring creative ideas to life.</p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {Object.entries(skillsData).map(([key, skill], index) => (
            <div 
              key={key}
              className={`skill-card ${skill.color} ${activeSkill === key ? 'active' : ''}`}
              onMouseEnter={() => handleSkillHover(key)}
              onMouseLeave={handleSkillLeave}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-background"></div>
              
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <h3 className="skill-title">{skill.title}</h3>
              </div>

              <p className="skill-description">{skill.description}</p>

              <div className="tools-section">
                <h4 className="tools-title">Tools & Technologies</h4>
                <div className="tools-list">
                  {skill.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className="tool-item"
                      style={{ animationDelay: `${toolIndex * 0.1}s` }}
                    >
                      <div className="tool-info">
                        <span className="tool-icon">{tool.icon}</span>
                        <span className="tool-name">{tool.name}</span>
                        <span className="tool-level">{tool.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${tool.level}%` }}
                        ></div>
                        <div className="progress-glow"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-hover-overlay"></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-icon">🎨</div>
              <div className="stat-content">
                <span className="stat-number">4+</span>
                <span className="stat-label">Design Tools</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">💻</div>
              <div className="stat-content">
                <span className="stat-number">6+</span>
                <span className="stat-label">Web Technologies</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <span className="stat-number">∞</span>
                <span className="stat-label">Learning Mindset</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="skills-cta">
          <p>Ready to leverage these skills for your next project?</p>
          <button className="hire-me-btn">
            <span className="btn-text">Let's Collaborate</span>
            <div className="btn-particles">
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;