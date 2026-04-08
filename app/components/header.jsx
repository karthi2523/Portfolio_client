'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';


const Header = () => {
  const name = "Deekshithaa";
  const [visibleLetters, setVisibleLetters] = useState(0);

  const titles = [
    'Software Developer',
    'Full Stack Developer',
    'Web Developer'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < name.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayedText(prev =>
        isDeleting
          ? currentTitle.substring(0, prev.length - 1)
          : currentTitle.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section style={{marginBottom:"20px"}} className="header-section">
      <div className="container px-3 px-md-5">
        <div className="row align-items-center flex-column flex-lg-row">

          <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0 header-left">
            <h1 className="fw-bold display-5 mb-2">
              Hi, I'm{' '}
              <span className="highlighted-name">
                {name.split('').map((char, idx) => (
                  <span
                    key={idx}
                    className={`fade-letter ${idx < visibleLetters ? 'visible' : ''}`}
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            <h3 className="typing-title text-muted mb-4">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </h3>
<p className="lead mb-3">
  I am a dedicated Software Developer with a Bachelor of Science in Computer Science.
</p>

<p className="mb-3">
  Experienced in building <strong>responsive and user-focused</strong> web applications.
</p>

<p className="mb-3">
  Strong problem-solving abilities with hands-on experience in developing efficient and scalable solutions.
</p>

<p className="mb-3">
  Always eager to experiment with new frameworks and adapt quickly to evolving tech landscapes.
</p>

<p className="mb-4">
  My focus is on delivering products that solve problems and leave a lasting impression.
</p>

        <div
          className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
          style={{ position: 'relative', zIndex: 1000 }}
        >
          <button
            onClick={() =>
              window.open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=deekshi1323@gmail.com',
                '_blank'
              )
            }
            className="btn btn-dark btn-lg rounded-pill fw-semibold shadow position-relative"
            style={{ 
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
            }}
          >
            Contact Me
          </button>

          <a
            href="/#contact"
            className="btn btn-outline-dark btn-lg rounded-pill fw-semibold no-hover"
            style={{ 
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              borderWidth: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.classList.add('bg-dark', 'text-white');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.classList.remove('bg-dark', 'text-white');
            }}
          >
            Let's Connect
          </a>
        </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <motion.div
              className="profile-card shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div  className="code-editor">
                <div className="editor-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="editor-title">profile.js</span>
                </div>
                <pre className="code-content">{`const profile = {
  name: '${name}',
  role: 'Software Developer',
  qualification: 'B.Sc. (CSE)',
  skills: [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'PHP', 'Node.js', 'MySQL', 'WordPress'
  ],
  passionate: true,
  hireable: function () {
    return this.passionate && this.skills.length >= 5;
  }
};`}</pre>
              </div>
              <div className="social-icons mt-3">
                <a href="https://linkedin.com/in/deekshithaa-k-074a08249/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/Deekshi23" target="_blank"><FaGithub /></a>
                <a href="mailto:deekshi1323@gmail.com"><FaEnvelope /></a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
