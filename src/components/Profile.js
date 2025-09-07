import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Profile.css';
import profile from '../assets/srinath.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import cv from '../assets/MERN Srinath.pdf';

const Profile = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  return (
    <section id="profile" className="profile-section">
      <div className="section-container">
        <motion.div
          className="profile-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Profile Image */}
          <motion.div 
            className="profile-image-container"
            variants={imageVariants}
          >
            <motion.img
              src={profile}
              alt="Srinath M Profile"
              className="profile-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="profile-image-bg"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Profile Text */}
          <motion.div className="profile-text" variants={itemVariants}>
            <motion.p 
              className="greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="name"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Srinath M
            </motion.h1>
            
            <motion.p 
              className="title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Full Stack Web Developer at Pozomind
            </motion.p>
            
            <motion.p 
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Passionate about creating beautiful, functional, and user-friendly web applications. Currently working at Pozomind, delivering innovative web solutions and software development services.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="button-container"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(cv, '_blank')}
              >
                Download CV
              </motion.button>
              
              <motion.button
                className="btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Info
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="social-container"
              variants={itemVariants}
            >
              <motion.img
                src={linkedin}
                alt="LinkedIn"
                className="social-icon"
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: [0, -10, 10, 0]
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open('https://www.linkedin.com/in/srinath-m-39a64817a/', '_blank')}
              />
              
              <motion.img
                src={github}
                alt="GitHub"
                className="social-icon"
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: [0, -10, 10, 0]
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open('https://github.com/srinath6198', '_blank')}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
