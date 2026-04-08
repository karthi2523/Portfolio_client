'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'; // Inheriting styles

const certifications = [
  {
    title: "Google Data Analytics Certificate",
    description:
      "Earned the Google Data Analytics Professional Certificate, demonstrating practical skills in data cleaning, analysis, and data visualization.",
    tech: ['Certificate', 'Google', 'Data'],
    image: assets.edu_icon,
  },
  {
    title: "Google Business Intelligence Certificate",
    description:
      "Earned the Google Business Intelligence Professional Certificate, demonstrating proficiency in data modeling, database design, and dashboarding.",
    tech: ['Certificate', 'Google', 'Business'],
    image: assets.edu_icon,
  },
  {
    title: "Awards & Extracurriculars",
    description:
      "Achieved 3rd place in the District Level 400m Running Championship. Awarded 2nd prize in the Tamil Nadu English Proficiency Test.",
    tech: ['Achievement', 'Sports', 'Language'],
    image: assets.project_icon,
  },
];

const Certifications = () => {
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5" data-aos="fade-down">Certifications & Achievements</h2>

      {zoomImage && (
        <div className="zoom-modal" onClick={() => setZoomImage(null)}>
          <div className="zoom-content">
            <Image src={zoomImage} alt="Zoomed" layout="fill" objectFit="contain" />
          </div>
        </div>
      )}

      <div className="row g-4 justify-content-center">
        {certifications.map((item, idx) => (
          <div
            key={idx}
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div 
              className="project-card shadow-sm p-4 rounded bg-white d-flex flex-column" 
              style={{ border: "1px solid #eaeaea", height: "100%", transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
              }}
            >
              <div className="d-flex align-items-start mb-4">
                <div 
                  className="icon-container me-3 d-flex align-items-center justify-content-center shadow-sm" 
                  style={{ width: "55px", height: "55px", borderRadius: "12px", backgroundColor: "#f8f9fa", border: "1px solid #f0f0f0" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ fontSize: "1.1rem", color: "#111" }}>{item.title}</h5>
                  <span className="text-muted fw-semibold text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>
                    {item.tech[0]}
                  </span>
                </div>
              </div>
              
              <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.7", flexGrow: 1 }}>
                {item.description}
              </p>
              
              <div className="tech-stack border-top pt-3 mt-auto">
                {item.tech.slice(1).map((tech, i) => (
                  <span 
                    key={i} 
                    className="rounded-pill d-inline-block me-2 mb-1 px-3 py-1" 
                    style={{ fontWeight: "500", fontSize: "0.8rem", backgroundColor: "#f1f3f5", color: "#212529", border: "1px solid #dee2e6" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
