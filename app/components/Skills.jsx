'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useDarkMode } from './DarkModeContext';
import './Services.css';

const skills = [
  { name: 'HTML5', icon: assets.html5 },
  { name: 'CSS3', icon: assets.css3 },
  { name: 'JavaScript', icon: assets.js },
  { name: 'React.js', icon: assets.reactimg },
  { name: 'Bootstrap', icon: assets.bootstrap },
  { name: 'Figma', icon: assets.figma },
  { name: 'WordPress', icon: assets.wordpress },
  { name: 'Node.js', icon: assets.nodejs },
  { name: 'PHP', icon: assets.php },
  { name: 'MySQL', icon: assets.mysqlimg }
];

const tools = [
  { name: 'VS Code', icon: assets.vscode },
  { name: 'Git', icon: assets.git },
  { name: 'GitHub', icon: assets.github },
  { name: 'Postman', icon: assets.postman }
];

const Services = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 80,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className={`skills-section-wrapper py-5 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        
        {/* Skills Heading */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="section-title-premium">Skills & Expertise</h2>
          <p className="section-subtitle-premium">Technologies and languages I work with to build responsive, full-stack applications</p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx} 
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              variants={itemVariants}
            >
              <div className="premium-skill-card text-center">
                <div className="skill-icon-wrapper">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    width={48} 
                    height={48} 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <div className="text-center mt-5 pt-4 mb-4" data-aos="fade-up">
          <h3 className="section-title-premium-sub">Tools & Workflow</h3>
          <p className="section-subtitle-premium">The platforms and systems I use for development, version control, and APIs</p>
        </div>

        {/* Tools Grid */}
        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx} 
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              variants={itemVariants}
            >
              <div className="premium-skill-card text-center">
                <div className="skill-icon-wrapper">
                  <Image 
                    src={tool.icon} 
                    alt={tool.name} 
                    width={48} 
                    height={48} 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="skill-name">{tool.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
