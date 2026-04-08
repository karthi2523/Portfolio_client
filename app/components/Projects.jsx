'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const featuredProjects = [
  {
    title: "Registration Portal",
    tagline: "Excited to Share! 🎉",
    description: "I’ve successfully completed the Registration Portal as part of my full-stack development tasks. This project gave me hands-on experience in building both the frontend and backend, integrating them smoothly and ensuring proper functionality for users. It really helped me strengthen my skills in full-stack development and understand how each layer of a web application works together. Looking forward to taking on more challenging projects and continuing to grow as a developer!",
    tech: ['Frontend', 'Backend', 'Full-Stack Integration'],
    images: [assets.Project1_image1, assets.Project1_image2],
    githubLink: "https://github.com/Deekshi23/registration_portal"
  },
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

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section style={{ marginTop: "-20px" }} className="projects-section container py-5">
      <h2 className="text-center mb-5" data-aos="fade-down">Projects</h2>

      {zoomImage && (
        <div className="zoom-modal" onClick={() => setZoomImage(null)}>
          <div className="zoom-content">
            <Image src={zoomImage} alt="Zoomed" layout="fill" objectFit="contain" />
          </div>
        </div>
      )}

      {/* Featured Projects */}
      <div className="row mb-5">
        {featuredProjects.map((project, pIdx) => (
          <div className="col-12 mb-5" key={pIdx}>
            <div className="project-card featured-project-card shadow-sm p-4 p-md-5 rounded border bg-white text-dark">
              <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="fw-bold mb-0 me-3" style={{ color: "#222" }}>{project.title}</h2>
                  <span className="badge bg-primary fs-6 mt-2 mt-sm-0 py-2 px-3 shadow-sm">{project.tagline}</span>
                </div>
              </div>
              
              <div className="row g-5 align-items-center">
                <div className="col-xl-5 col-lg-12">
                  <p className="text-muted" style={{ lineHeight: "1.9", fontSize: "1.1rem" }}>
                    {project.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm fs-6 rounded-pill px-3 py-2 fw-semibold">
                        🔗 GitHub Repo
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm fs-6 rounded-pill px-3 py-2 fw-semibold">
                        🔗 Live Preview
                      </a>
                    )}
                  </div>
                  <div className="tech-stack mt-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge me-2 mb-2" style={{ fontSize: "0.85rem" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="col-xl-7 col-lg-12">
                  <div className="row g-4 justify-content-center">
                    {project.images.map((img, idx) => (
                      <div className={project.images.length === 1 ? "col-md-10" : "col-md-6"} key={idx}>
                        <div 
                          className="zoomable-image shadow-sm overflow-hidden d-flex justify-content-center align-items-center" 
                          style={{ borderRadius: "16px", cursor: 'zoom-in', height: '100%', border: "2px solid #f4f4f4", backgroundColor: "#fafafa", minHeight: "280px" }}
                          onClick={() => setZoomImage(img)}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="img-fluid"
                            style={{ objectFit: 'contain', width: '100%', maxHeight: "320px" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Projects;
