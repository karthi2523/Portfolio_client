'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';
import './About.css';

const About = () => {
  const [showTitlePopup, setShowTitlePopup] = useState(false);
  const { darkMode } = useDarkMode(); 

  const handleShowPopup = () => {
    setShowTitlePopup(true);
    setTimeout(() => {
      setShowTitlePopup(false);
    }, 2000);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        handleShowPopup();
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
    <h1
  style={{
    marginTop: '-20px',
    color: darkMode ? 'white' : 'black'
  }}
  className="section-title text-center"
  id="about"
>
  About Me
</h1>


      <section
        id="about"
        className={`about-section container py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      >
        <div className="row align-items-center g-4">
          <div id="content" className="col-12">
            <motion.div
              className="p-4 p-md-5 rounded-4 shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                color: darkMode ? '#e0e0e0' : '#2d3748',
                border: darkMode ? '1px solid #333' : '1px solid #eaeaea',
              }}
            >
              <h3 className={`fw-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`} style={{ letterSpacing: '-0.5px' }}>
                Crafting exceptional digital experiences with robust engineering.
              </h3>
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                I am a passionate and dedicated <strong>Software Developer</strong> with a Bachelor of Science in Computer Science. My expertise lies in building responsive, scalable, and highly interactive web applications that not only solve real-world problems but also deliver seamless user experiences.
              </p>
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                With a strong analytical mindset and deep technical foundations, I have successfully engineered full-stack solutions. From architecting efficient database models to crafting pixel-perfect user interfaces, I thrive in delivering high-quality code across the entire software development lifecycle.
              </p>
              <p className="fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                I am driven by a thirst for continuous learning, an adaptable approach towards emerging technologies, and an unwavering commitment to excellence. I look forward to contributing innovative solutions and collaborating in fast-paced, forward-thinking development environments.
              </p>
            </motion.div>
          </div>
        </div>

     
        <div className="row mt-5 gx-4 gy-4">
          <div className="col-12">
            <div
              className="info-card h-100 shadow-sm p-3 rounded-4"
              style={{
                backgroundColor: darkMode ? '#2b2b2b' : '#fff',
                color: darkMode ? '#f5f5f5' : '#000'
              }}
            >
              <div className="icon-title d-flex align-items-center mb-2">
                <Image
                  src={assets.project_icon}
                  alt="Experience Icon"
                  width={28}
                  height={28}
                  className="me-2"
                />
                <h5 className={`fw-bold mb-0 ${darkMode ? 'text-light' : 'text-dark'}`}>Experience</h5>
              </div>
              <div className="card-content">
                <motion.h3
                  className="typing-title mb-3 role-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Software Developer – eWallHost Web Services Pvt. Limited
                </motion.h3>

                <motion.p
                  className="intern-description mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <strong className={darkMode ? 'text-light' : 'text-dark'}>11/2025 - Present | Chennai, India</strong><br/>
                  Web Developer & Site Administrator for Betting Premier.<br/>
                  • Developed and maintained responsive web applications using React.js, HTML, CSS, JavaScript, PHP, and MySQL.<br/>
                  • Managed website maintenance and WordPress administration, including debugging, optimizing performance, and handling databases.
                </motion.p>
                
                <motion.h3
                  className="typing-title mb-3 role-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Full Stack Development Intern – United Technology
                </motion.h3>

                <motion.p
                  className="intern-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <strong className={darkMode ? 'text-light' : 'text-dark'}>06/2025 - 09/2025 | Dharapuram</strong><br/>
                  • Developed responsive full-stack web applications using HTML, CSS, JavaScript, PHP, and MySQL.<br/>
                  • Built secure features including authentication, order management, and payment integration.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 gx-4 gy-4">
          <div className="col-12">
            <div
              className="info-card shadow-sm p-3 rounded-4"
              style={{
                backgroundColor: darkMode ? '#2b2b2b' : '#fff',
                color: darkMode ? '#f5f5f5' : '#000'
              }}
            >
              <div className="icon-title d-flex align-items-center mb-2">
                <Image
                  src={assets.edu_icon}
                  alt="Education Icon"
                  width={28}
                  height={28}
                  className="me-2"
                />
                <h5 className={`fw-bold mb-0 ${darkMode ? 'text-light' : 'text-dark'}`}>Education</h5>
              </div>
              <div className="card-content">
                <h6 className="fw-semibold mb-1">B.Sc. Computer Science</h6>
                <p className="text-muted mb-2">Karunya Institute of Technology and Sciences – 7.08 CGPA (2022 - 2025)</p>

                <h6 className="fw-semibold mb-1">Higher Secondary Certificate (HSC)</h6>
                <p className="text-muted mb-2">Cheran Matriculation Higher Secondary School – 70.01% (2020 - 2022)</p>

                <h6 className="fw-semibold mb-1">Secondary School Leaving Certificate (SSLC)</h6>
                <p className="text-muted mb-0">Cheran Matriculation Higher Secondary School – 69.2% (2019 - 2020)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
