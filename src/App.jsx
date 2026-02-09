import React, { useState } from 'react';
import { Shield, Bot, ShoppingCart, Monitor, Code, MapPin, Mail, Building, Send } from 'lucide-react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Web3Forms integration - replace with your access key
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Get this from web3forms.com
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        subject: 'New Contact Form Submission from Tulip IT Group'
      })
    });

    const data = await response.json();
    
    if (data.success) {
      setSubmitMessage('Message sent successfully! We\'ll be in touch soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setSubmitMessage('Oops! Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-icon">🌷</div>
            <span className="logo-text">Tulip <span className="logo-highlight">IT Group</span></span>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="cta-button-header" onClick={scrollToContact}>GET STARTED</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="location-badge">
            <MapPin size={16} />
            <span>Based in NYC • Serving Clients Nationwide</span>
          </div>
          <h1 className="hero-title">
            Secure, Compliant IT Systems <span className="hero-highlight">Built to Scale</span>
          </h1>
          <p className="hero-subtitle">
            Security-first technology services designed for mission-critical needs
          </p>
          <div className="hero-cta-container">
            <button className="hero-cta-button" onClick={scrollToContact}>
              SCHEDULE A CONSULTATION
            </button>
          </div>
          <div className="hero-badges">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Enterprise Security</span>
            </div>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>24/7 Support</span>
            </div>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>WBE Certification In Process</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-badge">Our Services</div>
          <h2 className="section-title">Comprehensive IT Solutions</h2>
          <p className="section-subtitle">
            From cybersecurity to custom development, we provide end-to-end technology services tailored to your enterprise needs.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Shield size={32} />
              </div>
              <h3>Cybersecurity</h3>
              <p>
                Security assessments, compliance, and threat management for enterprise protection. We safeguard your business with proactive defense strategies.
              </p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Bot size={32} />
              </div>
              <h3>AI Enablement</h3>
              <p>
                Workflow automation, AI integration, and practical business process optimization. Transform operations with intelligent solutions.
              </p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <ShoppingCart size={32} />
              </div>
              <h3>VAR Services</h3>
              <p>
                Hardware and software procurement, vendor management, and licensing optimization. Get the best value for your technology investments.
              </p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Monitor size={32} />
              </div>
              <h3>Managed Services (MSP)</h3>
              <p>
                Infrastructure monitoring, proactive support, and system maintenance. Keep your business running smoothly around the clock.
              </p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Code size={32} />
              </div>
              <h3>Development Services</h3>
              <p>
                Custom solutions, integrations, and business automation. Build the tools you need to stay ahead of the competition.
              </p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-badge">About Us</div>
          <h2 className="section-title">
            Technology Partners You Can <span className="text-highlight">Trust</span>
          </h2>
          <div className="about-content">
            <p>
              Tulip IT Group is a partnership built on combining deep technical expertise with exceptional project management. We understand the unique challenges that NYC businesses face and deliver solutions that work.
            </p>
            <p>
              While headquartered in New York City, we serve clients nationwide with the same dedication to security, reliability, and innovation. Our partnership approach means you get personalized attention from experienced professionals who are invested in your success.
            </p>
            <p>
              Whether you need comprehensive cybersecurity, AI integration, or reliable managed services, we're here to help your business thrive in an increasingly digital world.
            </p>
          </div>
          <div className="about-badges">
            <div className="about-badge">
              <Building size={20} />
              <span>NYC-Based</span>
            </div>
            <div className="about-badge">
              <Shield size={20} />
              <span>WBE Certification In Process</span>
            </div>
            <div className="about-badge">
              <Monitor size={20} />
              <span>Enterprise-Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card stat-card-large">
              <div className="stat-number">100%</div>
              <div className="stat-label">Security-Focused Approach</div>
            </div>
            <div className="stat-card">
              <div className="stat-number stat-blue">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number stat-green">USA</div>
              <div className="stat-label">Nationwide Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-badge-light">Get In Touch</div>
          <h2 className="section-title-light">
            Let's Build Something <span className="text-highlight">Great Together</span>
          </h2>
          <p className="section-subtitle-light">
            Ready to transform your IT infrastructure? Schedule a consultation with our team to discuss your business needs and discover how we can help.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">contact@tulipitgroup.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Building size={24} />
                </div>
                <div>
                  <div className="contact-label">Headquarters</div>
                  <div className="contact-value">New York City, NY</div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3 className="form-title">Send Us a Message</h3>
              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="form-group">
                  <label>Project Description *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or IT needs..."
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  <Send size={20} />
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">🌷</div>
                <span className="logo-text">Tulip <span className="logo-highlight">IT Group</span></span>
              </div>
              <p className="footer-tagline">
                Secure, compliant IT systems designed to scale with mission-critical needs. Based in NYC, serving clients nationwide.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#services">Cybersecurity</a>
                <a href="#services">AI Enablement</a>
                <a href="#services">VAR Services</a>
                <a href="#services">Managed Services</a>
                <a href="#services">Development</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Tulip IT Group. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
