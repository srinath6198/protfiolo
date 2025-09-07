import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import experience from '../assets/experience.png';
import education from '../assets/education.png';
import About1 from '../assets/About1.jpg';
import arrow from '../assets/arrow.png';

const About = () => {
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
    hidden: { scale: 0.8, opacity: 0, x: -50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const educationData = [
    {
      icon: experience,
      title: "Software Trainee",
      description: "Software Developer",
      institution: "Pozomind",
      period: "September 2024 - Present",
      cgpa: "Current Role"
    },
    {
      icon: experience,
      title: "Full-Stack Developer Intern",
      description: "MERN Stack Development Internship",
      institution: "Innovaskill Technologies",
      period: "March 2024 - August 2024",
      cgpa: "Completed"
    },
    {
      icon: experience,
      title: "MERN Full Stack Course",
      description: "Full Stack Development using MERN Stack",
      institution: "Innovaskill Technologies",
      period: "June 2023 - January 2024",
      cgpa: "Completed"
    },
    {
      icon: education,
      title: "Bachelor of Engineering",
      description: "Computer Science and Engineering",
      institution: "Adhiyamaan College of Engineering",
      period: "2020 - 2023",
      cgpa: "7.8 CGPA"
    },
    {
      icon: education,
      title: "Diploma",
      description: "Computer Science and Engineering",
      institution: "Er. Perumal Manimekalai Polytechnic College",
      period: "2019",
      cgpa: "73%"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          className="about-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="about-header" variants={itemVariants}>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get To Know More
            </motion.p>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              About Me
            </motion.h2>
          </motion.div>

          {/* About Description */}
          <motion.div 
            className="about-description"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
              I am a passionate Full Stack Developer currently working at <strong>Pozomind</strong>, with expertise in modern web technologies including React, Node.js, MongoDB, and Express. I love creating innovative solutions and turning ideas into reality through code. My experience spans from e-commerce platforms to social media applications and professional company websites.
            </p>
            <p>
              At Pozomind, I contribute to delivering cutting-edge web solutions and software development services, helping businesses establish their digital presence with modern, responsive, and user-friendly applications.
            </p>
          </motion.div>

          <div className="about-grid">
            {/* About Image */}
            <motion.div 
              className="about-image-container"
              variants={imageVariants}
            >
              <motion.img
                src={About1}
                alt="About Srinath"
                className="about-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="about-image-bg"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            {/* Education Cards */}
            <motion.div className="education-container" variants={itemVariants}>
              <div className="education-grid">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="education-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    <div className="card-header">
                      <motion.img
                        src={item.icon}
                        alt={item.title}
                        className="card-icon"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      />
                      <h3 className="card-title">{item.title}</h3>
                    </div>
                    <p className="card-description">{item.description}</p>
                    <p className="card-institution">{item.institution}</p>
                    <div className="card-footer">
                      <span className="card-period">{item.period}</span>
                      <span className="card-cgpa">{item.cgpa}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Arrow */}
          <motion.div 
            className="scroll-arrow"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            onClick={() => {
              document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.img
              src={arrow}
              alt="Scroll to Skills"
              className="arrow-icon"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
