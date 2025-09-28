import React, { useState, useEffect } from "react";
import "./contact.css";

const Contact = () => {
  const [sectionLoaded, setSectionLoaded] = useState(false);
  const [formFields, setFormFields] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    projectBudget: '',
    messageContent: ''
  });
  const [fieldStates, setFieldStates] = useState({
    fullName: false,
    emailAddress: false,
    phoneNumber: false,
    projectBudget: false,
    messageContent: false
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionLoaded(true);
        }
      },
      { threshold: 0.2 }
    );

    const contactElement = document.querySelector('.contact-portfolio-section');
    if (contactElement) {
      sectionObserver.observe(contactElement);
    }

    return () => sectionObserver.disconnect();
  }, []);

  const handleFieldChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const handleFieldFocus = (fieldName) => {
    setFieldStates({
      ...fieldStates,
      [fieldName]: true
    });
  };

  const handleFieldBlur = (fieldName) => {
    if (!formFields[fieldName]) {
      setFieldStates({
        ...fieldStates,
        [fieldName]: false
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Project inquiry submitted:', formFields);
      setFormSubmitting(false);
      setFormSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 3000);
    }, 2000);
  };

  const projectBudgets = [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const businessInfo = [
    {
      iconSymbol: "💼",
      infoTitle: "Business Email",
      infoDetails: "oshenkarunathilaka@gmail.com",
      actionLink: "mailto:contact@oshen.dev"
    },
    {
      iconSymbol: "🎯",
      infoTitle: "Project Consultation",
      infoDetails: "+94 77 133 5307",
      actionLink: "tel:+94771335307"
    },
    {
      iconSymbol: "⏰",
      infoTitle: "Response Time",
      infoDetails: "Within 24 hours",
      actionLink: null
    }
  ];

  return (
    <section className="contact-portfolio-section" id="contact">
      <div className="portfolio-background-effects">
        <div className="mesh-gradient-1"></div>
        <div className="mesh-gradient-2"></div>
        <div className="mesh-gradient-3"></div>
        <div className="geometric-pattern">
          <div className="pattern-grid">
            {[...Array(50)].map((_, i) => (
              <div key={i} className={`grid-dot dot-${i}`}></div>
            ))}
          </div>
        </div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <div className="portfolio-content-wrapper">
        <div className={`portfolio-main-content ${sectionLoaded ? 'content-loaded' : ''}`}>
          {/* Premium Header */}
          <div className="portfolio-header-section">
            <div className="header-badge">
              <span className="badge-text">Let's Collaborate</span>
              <div className="badge-glow"></div>
            </div>
            <h1 className="portfolio-main-heading">
              Start Your Next
              <span className="heading-highlight"> Project</span>
            </h1>
            <div className="header-description">
              <p>Ready to transform your ideas into digital reality? Let's discuss your vision and create something extraordinary together.</p>
            </div>
            <div className="header-divider">
              <div className="divider-line"></div>
              <div className="divider-center"></div>
              <div className="divider-line"></div>
            </div>
          </div>

          {/* Business Information */}
          <div className="business-info-section">
            <div className="info-cards-container">
              {businessInfo.map((info, index) => (
                <div key={index} className="business-info-card" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="business-card-inner">
                    <div className="business-icon-wrapper">
                      <span className="business-icon">{info.iconSymbol}</span>
                      <div className="icon-pulse"></div>
                    </div>
                    <div className="business-info-content">
                      <h3 className="business-info-title">{info.infoTitle}</h3>
                      {info.actionLink ? (
                        <a href={info.actionLink} className="business-info-detail">{info.infoDetails}</a>
                      ) : (
                        <p className="business-info-detail">{info.infoDetails}</p>
                      )}
                    </div>
                    <div className="card-hover-effect"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Form */}
          <div className="project-form-container">
            <div className="form-wrapper-card">
              <div className="form-header-content">
                <h2 className="form-section-title">Project Details</h2>
                <p className="form-section-subtitle">Tell me about your project and let's bring it to life</p>
              </div>

              {formSuccess && (
                <div className="success-notification">
                  <div className="success-icon">✨</div>
                  <div className="success-content">
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form className="project-inquiry-form" onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  <div className="form-field-wrapper">
                    <div className="input-container">
                      <input
                        type="text"
                        name="fullName"
                        className={`styled-input ${fieldStates.fullName || formFields.fullName ? 'field-active' : ''}`}
                        value={formFields.fullName}
                        onChange={handleFieldChange}
                        onFocus={() => handleFieldFocus('fullName')}
                        onBlur={() => handleFieldBlur('fullName')}
                        required
                      />
                      <label className="floating-label">Full Name</label>
                      <div className="input-highlight"></div>
                      <div className="field-border"></div>
                    </div>
                  </div>

                  <div className="form-field-wrapper">
                    <div className="input-container">
                      <input
                        type="email"
                        name="emailAddress"
                        className={`styled-input ${fieldStates.emailAddress || formFields.emailAddress ? 'field-active' : ''}`}
                        value={formFields.emailAddress}
                        onChange={handleFieldChange}
                        onFocus={() => handleFieldFocus('emailAddress')}
                        onBlur={() => handleFieldBlur('emailAddress')}
                        required
                      />
                      <label className="floating-label">Email Address</label>
                      <div className="input-highlight"></div>
                      <div className="field-border"></div>
                    </div>
                  </div>

                  <div className="form-field-wrapper">
                    <div className="input-container">
                      <input
                        type="tel"
                        name="phoneNumber"
                        className={`styled-input ${fieldStates.phoneNumber || formFields.phoneNumber ? 'field-active' : ''}`}
                        value={formFields.phoneNumber}
                        onChange={handleFieldChange}
                        onFocus={() => handleFieldFocus('phoneNumber')}
                        onBlur={() => handleFieldBlur('phoneNumber')}
                      />
                      <label className="floating-label">Phone Number (Optional)</label>
                      <div className="input-highlight"></div>
                      <div className="field-border"></div>
                    </div>
                  </div>

                  <div className="form-field-wrapper">
                    <div className="input-container">
                      <select
                        name="projectBudget"
                        className={`styled-select ${fieldStates.projectBudget || formFields.projectBudget ? 'field-active' : ''}`}
                        value={formFields.projectBudget}
                        onChange={handleFieldChange}
                        onFocus={() => handleFieldFocus('projectBudget')}
                        onBlur={() => handleFieldBlur('projectBudget')}
                        required
                      >
                        <option value=""></option>
                        {projectBudgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                      <label className="floating-label">Project Budget</label>
                      <div className="input-highlight"></div>
                      <div className="field-border"></div>
                    </div>
                  </div>
                </div>

                <div className="form-field-wrapper full-width">
                  <div className="input-container">
                    <textarea
                      name="messageContent"
                      rows="6"
                      className={`styled-textarea ${fieldStates.messageContent || formFields.messageContent ? 'field-active' : ''}`}
                      value={formFields.messageContent}
                      onChange={handleFieldChange}
                      onFocus={() => handleFieldFocus('messageContent')}
                      onBlur={() => handleFieldBlur('messageContent')}
                      required
                    ></textarea>
                    <label className="floating-label">Project Description</label>
                    <div className="input-highlight"></div>
                    <div className="field-border"></div>
                  </div>
                </div>

                <div className="form-submit-section">
                  <button 
                    type="submit" 
                    className={`premium-submit-button ${formSubmitting ? 'button-loading' : ''}`}
                    disabled={formSubmitting}
                  >
                    <span className="button-content">
                      {formSubmitting ? (
                        <>
                          <div className="submit-loader"></div>
                          <span>Sending Project Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span className="button-text">Send Project Inquiry</span>
                          <span className="button-icon">🚀</span>
                        </>
                      )}
                    </span>
                    <div className="button-glow-effect"></div>
                    <div className="button-shine-effect"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Closing Section */}
          <div className="portfolio-closing-section">
            <div className="closing-content">
              <div className="closing-message">
                <h3>Ready to Get Started?</h3>
                <p>Every great project begins with a simple conversation. Let's make something amazing together.</p>
              </div>
              <div className="closing-decoration">
                <div className="decoration-elements">
                  <span className="element-1"></span>
                  <span className="element-2"></span>
                  <span className="element-3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;