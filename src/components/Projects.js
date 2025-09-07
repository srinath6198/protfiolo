import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import project from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import arrow from '../assets/arrow.png';

const Projects = () => {
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

  const projectsData = [
    {
      id: 1,
      title: "Pozo - Web Development Company",
      description: "A professional web development company website showcasing services, portfolio, and company information. Built with modern web technologies and responsive design.",
      image: project,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Responsive Design"],
      github: "https://github.com/srinath6198",
      liveDemo: "https://www.pozo.dev/home/",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with MERN stack, featuring user authentication, product management, shopping cart, and payment integration.",
      image:project2,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/srinath6198",
      liveDemo: "https://srinathe-commerce.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Social Media App (Threads Clone)",
      description: "A social media application inspired by Threads, built with modern web technologies. Features include user profiles, posts, likes, and real-time updates.",
      image:project3,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      github: "https://github.com/srinath6198",
      liveDemo: "https://threads-ao0j.onrender.com",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations, interactive elements, and a professional design.",
      image: project2,
      technologies: ["React", "Framer Motion", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/srinath6198",
      liveDemo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.div
          className="projects-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="projects-header" variants={itemVariants}>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Browse My Recent
            </motion.p>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Projects
            </motion.h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="projects-grid" variants={itemVariants}>
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -15,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
                }}
              >
                {/* Project Image */}
                <motion.div 
                  className="project-image-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <motion.div
                      className="overlay-content"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="view-project">View Project</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className="project-content">
                  <motion.h3 
                    className="project-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="project-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div 
                    className="technologies"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.8 + index * 0.2 + techIndex * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Project Buttons */}
                  <motion.div 
                    className="project-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Arrow */}
          <motion.div 
            className="scroll-arrow"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.img
              src={arrow}
              alt="Scroll to Contact"
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

export default Projects;
