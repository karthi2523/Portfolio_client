import React, { useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  assets.vscode, assets.git, assets.github, assets.postman
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

useEffect(() => {
  AOS.init({
    duration: 1000, 
    offset: 80,
    once: true,
    easing: 'ease-in-out'
  });
}, []);

  return (
    <>
      <h2  className="skills-heading text-center" data-aos="fade-up">
        Skills
      </h2>
      <section className="skills-section container py-5">
        <div className="row g-3 justify-content-center">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay={idx * 50}>
              <div 
                className="skill-box text-center shadow-sm p-3 rounded bg-white"
                style={{ transition: 'all 0.3s ease', cursor: 'default' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                }}
              >
                <Image src={skill.icon} alt={skill.name} width={40} height={40} />
                <p className="mt-2 text-dark small fw-medium mb-0">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

       <h3 className="tools-heading text-center mt-5" data-aos="fade-up">
  Tools I Use
</h3>
<div className="row g-3 justify-content-center mt-3">
  {tools.map((icon, idx) => (
    <div 
      key={idx} 
      className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1" 
      data-aos="flip-up"
      data-aos-delay={idx * 100}
    >
      <div 
        className="tool-box shadow-sm p-3 rounded bg-white text-center"
        style={{ transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'rotate(5deg) scale(1.1)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
          e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
        }}
      >
        <Image src={icon} alt={`Tool ${idx}`} width={30} height={30} style={{ objectFit: 'contain' }} />
      </div>
    </div>
  ))}
</div>

      </section>
    </>
  );
};

export default Services;
