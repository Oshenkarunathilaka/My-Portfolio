import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    design: [
      { name: "Adobe Illustrator", level: 90, icon: "🎨" },
      { name: "Adobe Photoshop", level: 85, icon: "🖼️" },
      { name: "UI/UX Design", level: 88, icon: "✨" }
    ],
    development: [
      { name: "HTML/CSS", level: 95, icon: "🌐" },
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 80, icon: "🔥" },
      { name: "Java", level: 75, icon: "☕" }
    ]
  };

  return (
    <section 
      id="about"   // ✅ this makes navbar link work
      className={`about-section ${isVisible ? "animate" : ""}`}
    >
      <div className="about-background">
        <div className="background-grid"></div>
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number"></span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          {/* Personal Info */}
          <div className="about-info">
            <div className="info-card">
              <div className="card-header">
                <div className="profile-badge">
                  <span className="badge-icon">👨‍💻</span>
                </div>
                <h3 className="info-title">Hello, I'm Oshen Karunathilaka</h3>
              </div>

              <div className="info-details">
                <div className="detail-item">
                  <span className="detail-icon">🎓</span>
                  <div className="detail-text">
                    <strong>Education</strong>
                    <p>Undergraduate Student at Sabaragamuwa University of Sri Lanka</p>
                    <span className="detail-subtitle">BSc (Hons) in Information Systems</span>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">💡</span>
                  <div className="detail-text">
                    <strong>Passion</strong>
                    <p>
                      Creating digital experiences that blend creativity with functionality.
                      I love turning ideas into reality through design and code.
                    </p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">🚀</span>
                  <div className="detail-text">
                    <strong>Goal</strong>
                    <p>
                      To become a versatile developer who can bridge the gap between
                      stunning design and robust development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="skills-title">Skills & Expertise</h3>

            <div className="skills-grid">
              {/* Design Skills */}
              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">🎨</span>
                  <h4>Design</h4>
                </div>
                <div className="skills-list">
                  {skills.design.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Skills */}
              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">💻</span>
                  <h4>Development</h4>
                </div>
                <div className="skills-list">
                  {skills.development.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Learning</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Passion for Code</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <p>
            Ready to bring your ideas to life with creative design and clean code.
          </p>
          <button className="cta-button">
            <span>Let's Work Together</span>
            <div className="button-hover-effect"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
