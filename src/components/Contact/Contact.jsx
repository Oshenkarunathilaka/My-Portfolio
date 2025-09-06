import React, { useState, useEffect } from "react";
import "./contact.css";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.querySelector('.contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInputFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleInputBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "oshen@example.com",
      link: "mailto:oshen@example.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+94 77 123 4567",
      link: "tel:+94771234567"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Sri Lanka",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      url: "https://facebook.com/",
      color: "#1877f2"
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      url: "https://wa.me/947XXXXXXXX",
      color: "#25d366"
    },
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/",
      color: "#333"
    }
  ];

  return (
    <section className={`contact ${isVisible ? 'animate' : ''}`}>
      <div className="contact-background">
        <div className="background-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="connection-lines">
          <svg className="lines-svg" viewBox="0 0 100 100">
            <path className="line line-1" d="M10,20 Q50,5 90,30" />
            <path className="line line-2" d="M15,60 Q50,40 85,70" />
            <path className="line line-3" d="M20,80 Q50,95 80,85" />
          </svg>
        </div>
      </div>

      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-intro">
          <p>Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and connect with fellow creators.</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-header">
              <h3>Get In Touch</h3>
              <p>Feel free to reach out through any of these channels</p>
            </div>
            
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Connect with me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      '--social-color': social.color 
                    }}
                    title={social.name}
                  >
                    {social.icon}
                    <div className="social-ripple"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-section">
            <div className="form-header">
              <h3>Send Message</h3>
              <p>Have a project in mind? Let's discuss it!</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('name')}
                  onBlur={handleInputBlur}
                  className={focusedField === 'name' ? 'focused' : ''}
                />
                <div className="input-line"></div>
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('email')}
                  onBlur={handleInputBlur}
                  className={focusedField === 'email' ? 'focused' : ''}
                />
                <div className="input-line"></div>
              </div>
              
              <div className="form-group">
                <textarea 
                  rows="5" 
                  name="message"
                  placeholder="Your Message" 
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('message')}
                  onBlur={handleInputBlur}
                  className={focusedField === 'message' ? 'focused' : ''}
                ></textarea>
                <div className="input-line"></div>
              </div>
              
              <button type="submit" className="btn-submit">
                <span className="btn-text">Send Message</span>
                <div className="btn-background"></div>
                <div className="btn-shine"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Message */}
        <div className="contact-footer">
          <div className="footer-content">
            <p>Thank you for visiting my portfolio!</p>
            <div className="footer-decoration">
              <span className="decoration-line"></span>
              <span className="decoration-dot"></span>
              <span className="decoration-line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;