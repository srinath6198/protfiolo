import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 }
    })
  };

  const skillsData = {
    frontend: [
      { name: "HTML", level: 90, icon: "/assets/checkmark.png" },
      { name: "CSS", level: 85, icon: "/assets/checkmark.png" },
      { name: "JavaScript", level: 88, icon: "/assets/checkmark.png" },
      { name: "React.js", level: 85, icon: "/assets/checkmark.png" },
      { name: "Adobe Photoshop", level: 70, icon: "/assets/checkmark.png" }
    ],
    backend: [
      { name: "MongoDB", level: 75, icon: "/assets/checkmark.png" },
      { name: "Node.js", level: 78, icon: "/assets/checkmark.png" },
      { name: "Express.js", level: 80, icon: "/assets/checkmark.png" },
      { name: "Git", level: 82, icon: "/assets/checkmark.png" }
    ]
  };

  const educationDetails = [
    {
      degree: "Software Trainee",
      field: "Software Developer",
      institution: "Pozomind",
      location: "Hosur, Tamil Nadu",
      period: "September 2024 - Present",
      cgpa: "Current Role",
      certificate: "https://www.pozomind.com/home/",
      isWork: true
    },
    {
      degree: "Full-Stack Developer Intern",
      field: "MERN Stack Development Internship",
      institution: "Innovaskill Technologies",
      period: "March 2024 - August 2024",
      cgpa: "Completed",
      certificate: "https://drive.google.com/file/d/1q488MFPeRmbQa-MQ34_fLVpPneOmZdUG/view?usp=sharing"
    },
    {
      degree: "MERN Full Stack Course",
      field: "Full Stack Development using MERN Stack",
      institution: "Innovaskill Technologies",
      period: "June 2023 - January 2024",
      cgpa: "Completed",
      certificate: "https://drive.google.com/file/d/1TCBR4YtDvRz1dyKN8-YNxbEJ5_V-PhpA/view?usp=sharing"
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Adhiyamaan College of Engineering",
      location: "Hosur, Tamil Nadu",
      period: "2020 - 2023",
      cgpa: "7.8 CGPA"
    },
    {
      degree: "Diploma",
      field: "Computer Science and Engineering",
      institution: "Er. Perumal Manimekalai Polytechnic College",
      location: "Tamil Nadu",
      period: "2019",
      cgpa: "73%"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          className="skills-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="skills-header" variants={itemVariants}>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Explore My
            </motion.p>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Technical Skills
            </motion.h2>
          </motion.div>

          {/* Education Details */}
          <motion.div className="education-details" variants={itemVariants}>
            <h3 className="education-title">Experience & Education</h3>
            <div className="education-list">
              {educationDetails.map((item, index) => (
                <motion.div
                  key={index}
                  className={`education-item ${item.isWork ? 'work-experience' : ''}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="education-header">
                    <h4 className="degree">{item.degree}</h4>
                    <span className="cgpa">{item.cgpa}</span>
                  </div>
                  <p className="field">{item.field}</p>
                  <p className="institution">{item.institution}</p>
                  <p className="location">{item.location}</p>
                  <p className="period">{item.period}</p>
                  {item.certificate && (
                    <a 
                      href={item.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="skills-grid" variants={itemVariants}>
            {/* Frontend Skills */}
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="category-title">Frontend Development</h3>
              <div className="skills-list">
                {skillsData.frontend.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-header">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="progress-container">
                      <motion.div
                        className="progress-bar"
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="category-title">Backend Development</h3>
              <div className="skills-list">
                {skillsData.backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-header">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="progress-container">
                      <motion.div
                        className="progress-bar"
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Arrow */}
          <motion.div 
            className="scroll-arrow"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.img
              src="/assets/arrow.png"
              alt="Scroll to Projects"
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

export default Skills;
