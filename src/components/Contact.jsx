import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');

  // Validation
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setSubmitError('Please fill in all fields.');
    setIsSubmitting(false);
    return;
  }

  // Additional validation for email format
  if (!validateEmail(formData.email)) {
    setSubmitError('Please enter a valid email address.');
    setIsSubmitting(false);
    return;
  }

  try {
    await emailjs.send(
      'service_328u5dq',
      'template_xhefib6',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'Yfn2326p_jXdL8Gxb'
    );

    // Success
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Auto-hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitError('There was an error sending your message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="contact animated">
      <div className="container">
        <h2 className="section-title animated">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animated">
            <h3>Let's talk about your project</h3>
            <p>I'm currently available for freelance work and full-time positions. Feel free to reach out if you want to collaborate or just say hi!</p>
            
            <div className="contact-methods">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>mazengaafer@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/mazengaafer</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/mazengaafer</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <form className="contact-form animated" onSubmit={handleSubmit}>
            {submitSuccess && (
              <div className="success-message success-animation">
                <i className="fas fa-check-circle"></i>
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div className="error-message error-animation">
                <i className="fas fa-exclamation-circle"></i>
                {submitError}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;