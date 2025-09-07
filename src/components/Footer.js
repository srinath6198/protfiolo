import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1 
      }
    })
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Navigation Links */}
          <motion.nav className="footer-nav">
            <ul className="footer-links">
              {['about', 'skills', 'projects', 'contact'].map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  variants={linkVariants}
                >
                  <motion.a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Copyright */}
          <motion.div 
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p>&copy; 2024 Srinath M. All Rights Reserved.</p>
            <p className="footer-subtitle">Full Stack Web Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/srinath-m-39a64817a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={linkedin} alt="LinkedIn" className="footer-social-icon" />
            </motion.a>
            <motion.a
              href="https://github.com/srinath6198"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={github} alt="GitHub" className="footer-social-icon" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
