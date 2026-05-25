'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useDarkMode } from './DarkModeContext';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const featuredProjects = [
  {
    title: "Karunya Institute Replica",
    tagline: "First Project 🚀",
    description: "I’ve built my first project by replicating the official Karunya Institute website using HTML, CSS, and JavaScript. This marks the beginning of my journey as a MERN Stack Developer. This project gave me a strong foundation in structuring web pages and styling them effectively. From here, I’m moving towards full MERN stack development building dynamic, scalable, and modern web applications.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    images: [assets.Project2_image2],
    githubLink: "https://github.com/Deekshi23/Karunya_website",
    liveLink: "https://lnkd.in/giBrZv4U"
  }
];

const Projects = () => {
  const [zoomImage, setZoomImage] = useState(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section 
      style={{ marginTop: "-20px" }} 
      className={`projects-section container py-5 ${darkMode ? 'dark-mode' : ''}`}
    >
      <div className="text-center mb-5" data-aos="fade-down">
        <h2 className="section-title-premium">Featured Work</h2>
        <p className="section-subtitle-premium">Showcasing web engineering and responsive interfaces</p>
      </div>

      {zoomImage && (
        <div className="zoom-modal" onClick={() => setZoomImage(null)}>
          <div className="zoom-content">
            <Image src={zoomImage} alt="Zoomed" layout="fill" objectFit="contain" />
            <button className="zoom-close" onClick={() => setZoomImage(null)}>&times;</button>
          </div>
        </div>
      )}

      {/* Featured Projects */}
      <div className="row justify-content-center">
        {featuredProjects.map((project, pIdx) => (
          <div className="col-lg-10 col-xl-9 mb-5" key={pIdx}>
            <motion.div 
              className="premium-project-card shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="row g-0 align-items-stretch">
                <div className="col-lg-6 d-flex flex-column justify-content-between p-4 p-md-5 content-side">
                  <div>
                    <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                      <span className="premium-tagline">{project.tagline}</span>
                    </div>
                    
                    <h3 className="project-title mb-3">{project.title}</h3>
                    
                    <p className="project-description mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="tech-stack-premium mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex flex-wrap gap-3">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="premium-btn btn-outline"
                        >
                          <FiGithub className="me-2" /> Code Repo
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="premium-btn btn-filled"
                        >
                          Live Preview <FiExternalLink className="ms-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 p-4 p-md-5 d-flex align-items-center justify-content-center visual-side">
                  {project.images.map((img, idx) => (
                    <div className="browser-mockup shadow" key={idx}>
                      <div className="browser-header">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                        <div className="browser-address-bar">karunya.edu.replica</div>
                      </div>
                      <div className="browser-body">
                        <div 
                          className="zoomable-image-premium" 
                          onClick={() => setZoomImage(img)}
                          title="Click to zoom image"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="img-fluid"
                            layout="responsive"
                            width={600}
                            height={380}
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="zoom-hover-overlay">
                            <span className="zoom-icon">🔍</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
