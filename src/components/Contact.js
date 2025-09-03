import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "/assets/email.png",
      label: "Email",
      value: "msrinath6109@gmail.com",
      link: "mailto:msrinath6109@gmail.com",
      color: "#007bff"
    },
    {
      icon: "/assets/linkedin.png",
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/srinath-m-39a64817a/",
      color: "#0077b5"
    },
    {
      icon: "/assets/whatsapp.png",
      label: "WhatsApp",
      value: "+91 8523922562",
      link: "https://wa.me/918523922562",
      color: "#25d366"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          className="contact-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="contact-header" variants={itemVariants}>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get in Touch
            </motion.p>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Contact Me
            </motion.h2>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              variants={itemVariants}
            >
              <h3 className="form-title">Send me a message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your email"
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Your message"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info-container"
              variants={itemVariants}
            >
              <h3 className="info-title">Get in touch</h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-item"
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      x: 10,
                      boxShadow: `0 5px 15px ${info.color}40`
                    }}
                  >
                    <div className="info-icon-container" style={{ backgroundColor: `${info.color}20` }}>
                      <img 
                        src={info.icon} 
                        alt={info.label} 
                        className="info-icon"
                        style={{ filter: `drop-shadow(0 2px 4px ${info.color}40)` }}
                      />
                    </div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div 
                className="additional-info"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="info-text">
                  I'm always open to discussing new opportunities, interesting projects, or creative ideas.
                </p>
                <p className="info-text">
                  Feel free to reach out through any of the channels above!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
