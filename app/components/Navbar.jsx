'use client';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeProvider } from './DarkModeContext';
import { motion, useScroll } from 'framer-motion';

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.style.backgroundColor = '#121212';
      body.style.color = '#ffffff';
    } else {
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#000000';
    }
  }, [darkMode]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      handleClose(); 
    }
  };

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)',
          zIndex: 1040,
        }}
      />
      <Navbar
        expand="lg"
        variant={darkMode ? 'dark' : 'light'}
        fixed="top"
        className={`shadow-sm py-3 ${darkMode ? 'text-white' : 'text-dark'}`}
        style={{
          backgroundColor: darkMode ? 'rgba(33, 37, 41, 0.85)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <Container fluid className="px-3 px-md-5">
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            Deekshithaa
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} aria-controls="offcanvas-navbar" />

          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleClose}
            id="offcanvas-navbar"
            aria-labelledby="offcanvas-navbar-label"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvas-navbar-label" className="fw-bold fs-4">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 gap-3 text-center">
                <Nav.Link href="#home" className="fs-5 fw-medium" onClick={handleClose}>
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="fs-5 fw-medium" onClick={handleClose}>
                  About Me
                </Nav.Link>
                <Nav.Link href="#services" className="fs-5 fw-medium" onClick={handleClose}>
                  Skills
                </Nav.Link>
                <Nav.Link href="#work" className="fs-5 fw-medium" onClick={handleClose}>
                  Projects
                </Nav.Link>
              </Nav>

              <div className="d-flex justify-content-center justify-content-lg-end align-items-center gap-3 mt-4 mt-lg-0">
                <Button
                  variant={darkMode ? 'light' : 'dark'}
                  className="rounded-pill d-flex align-items-center gap-2 fs-6 px-4 py-2 fw-semibold"
                  onClick={handleContactClick}
                  style={{
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Contact <FiArrowUpRight />
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
