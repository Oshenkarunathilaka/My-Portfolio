import React, { useState, useEffect } from "react";
import "./projects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.querySelector('.projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projectsData = {
    "graphic-design": {
      title: "Graphic Design",
      description: "Creative posters, social media designs, and brand identity projects.",
      icon: "🎨",
      color: "purple",
      subProjects: [
        {
          title: "Social Media Post Design",
          description: "Engaging social media graphics for various platforms",
          tech: ["Adobe Illustrator", "Photoshop"],
          image: "📱"
        },
        {
          title: "Brand Identity Design",
          description: "Complete brand packages including logos and guidelines",
          tech: ["Illustrator", "Brand Strategy"],
          image: "🏢"
        },
        {
          title: "Print Design",
          description: "Posters, brochures, and marketing materials",
          tech: ["Adobe Creative Suite", "Print Design"],
          image: "📄"
        },
        {
          title: "Digital Illustrations",
          description: "Custom illustrations for web and mobile applications",
          tech: ["Illustrator", "Digital Art"],
          image: "✨"
        }
      ]
    },
    "ui-design": {
      title: "UI Design",
      description: "Modern and user-friendly interfaces for websites and apps.",
      icon: "🎯",
      color: "pink",
      subProjects: [
        {
          title: "Dashboard Design",
          description: "Clean and intuitive dashboard interfaces",
          tech: ["Figma", "Adobe XD", "User Research"],
          image: "📊"
        },
        {
          title: "Mobile App UI",
          description: "Mobile-first design approach with modern aesthetics",
          tech: ["Figma", "Prototyping", "iOS/Android Guidelines"],
          image: "📱"
        },
        {
          title: "E-commerce Interface",
          description: "User-centered e-commerce website designs",
          tech: ["UX Research", "Wireframing", "Prototyping"],
          image: "🛒"
        },
        {
          title: "Landing Pages",
          description: "High-converting landing page designs",
          tech: ["UI/UX", "Conversion Optimization"],
          image: "🚀"
        }
      ]
    },
    "web-design": {
      title: "Web Design",
      description: "Responsive websites built with HTML, CSS, JavaScript & frameworks.",
      icon: "🌐",
      color: "yellow",
      subProjects: [
        {
          title: "React Portfolio Websites",
          description: "Modern portfolio websites built with React",
          tech: ["React", "CSS3", "Responsive Design"],
          image: "⚛️"
        },
        {
          title: "Next.js Applications",
          description: "Full-stack web applications with Next.js",
          tech: ["Next.js", "React", "API Integration"],
          image: "🔥"
        },
        {
          title: "Business Websites",
          description: "Professional business websites with modern design",
          tech: ["HTML5", "CSS3", "JavaScript"],
          image: "🏢"
        },
        {
          title: "Interactive Web Apps",
          description: "Dynamic web applications with smooth animations",
          tech: ["JavaScript", "CSS Animations", "API"],
          image: "💻"
        }
      ]
    },
    "mobile-development": {
      title: "Mobile App Development",
      description: "Cross-platform apps with seamless UX & modern features.",
      icon: "📱",
      color: "gradient",
      subProjects: [
        {
          title: "Cross-Platform Apps",
          description: "Mobile apps that work on both iOS and Android",
          tech: ["React Native", "Flutter", "Java"],
          image: "📱"
        },
        {
          title: "Progressive Web Apps",
          description: "Web apps with native mobile app experience",
          tech: ["PWA", "Service Workers", "Web APIs"],
          image: "🚀"
        },
        {
          title: "E-commerce Mobile Apps",
          description: "Feature-rich shopping applications",
          tech: ["React Native", "Payment Integration"],
          image: "🛍️"
        },
        {
          title: "Social Media Apps",
          description: "Social networking applications with real-time features",
          tech: ["Real-time Database", "Push Notifications"],
          image: "💬"
        }
      ]
    }
  };

  const handleProjectClick = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section className={`projects ${isVisible ? 'animate' : ''}`}>
      <div className="projects-background">
        <div className="background-mesh"></div>
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number"></span>
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-intro">
          <p>Explore my diverse portfolio showcasing creativity, technical skills, and attention to detail across various domains.</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {Object.entries(projectsData).map(([key, project], index) => (
            <div key={key} className="project-wrapper">
              <div 
                className={`project-card ${project.color} ${expandedProject === key ? 'expanded' : ''}`}
                onClick={() => handleProjectClick(key)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-header">
                  <div className="project-icon">
                    <span className="icon">{project.icon}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className={`expand-indicator ${expandedProject === key ? 'rotated' : ''}`}>
                    <span>+</span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="card-hover-effect"></div>
              </div>

              {/* Sub-projects */}
              <div className={`sub-projects ${expandedProject === key ? 'show' : ''}`}>
                <div className="sub-projects-grid">
                  {project.subProjects.map((subProject, subIndex) => (
                    <div 
                      key={subIndex} 
                      className="sub-project-card"
                      style={{ animationDelay: `${subIndex * 0.1}s` }}
                    >
                      <div className="sub-project-image">
                        <span className="sub-icon">{subProject.image}</span>
                      </div>
                      
                      <div className="sub-project-content">
                        <h4 className="sub-project-title">{subProject.title}</h4>
                        <p className="sub-project-description">{subProject.description}</p>
                        
                        <div className="tech-stack">
                          {subProject.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="sub-card-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="projects-cta">
          <p>Want to see more details or discuss a project?</p>
          <button className="view-all-btn">
            <span>View All Projects</span>
            <div className="btn-shimmer"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;