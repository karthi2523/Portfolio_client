'use client';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDarkMode } from './DarkModeContext';
import { motion, useScroll } from 'framer-motion';
import styles from './Navbar.module.css';

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { scrollYProgress } = useScroll();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

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
          zIndex: 1050,
        }}
      />
      <Navbar
        expand="lg"
        variant={darkMode ? 'dark' : 'light'}
        fixed="top"
        className={`${styles.navbarFloating}`}
      >
        <Container fluid className={`${styles.navContainer} ${darkMode ? styles.navContainerDark : ''}`}>
          <Navbar.Brand href="#home" className={styles.brand}>
            Deekshithaa
          </Navbar.Brand>
          
          <div className="d-flex align-items-center d-lg-none">
            <Navbar.Toggle onClick={handleShow} aria-controls="offcanvas-navbar" className="ms-2 border-0 shadow-none" />
          </div>

          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleClose}
            id="offcanvas-navbar"
            aria-labelledby="offcanvas-navbar-label"
            placement="end"
            className={styles.offcanvasMenu}
            style={{
              backgroundColor: darkMode ? '#18181b' : '#ffffff',
              color: darkMode ? '#ffffff' : '#000000',
            }}
          >
            <Offcanvas.Header closeButton className={darkMode ? 'btn-close-white' : ''}>
              <Offcanvas.Title id="offcanvas-navbar-label" className={styles.brand}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 text-center">
                <Nav.Link href="#home" className={`${styles.navLink} ${darkMode ? styles.navLinkDark : styles.navLinkLight}`} onClick={handleClose}>
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className={`${styles.navLink} ${darkMode ? styles.navLinkDark : styles.navLinkLight}`} onClick={handleClose}>
                  About Me
                </Nav.Link>
                <Nav.Link href="#services" className={`${styles.navLink} ${darkMode ? styles.navLinkDark : styles.navLinkLight}`} onClick={handleClose}>
                  Skills
                </Nav.Link>
                <Nav.Link href="#work" className={`${styles.navLink} ${darkMode ? styles.navLinkDark : styles.navLinkLight}`} onClick={handleClose}>
                  Projects
                </Nav.Link>
              </Nav>

              <div className="d-flex justify-content-center justify-content-lg-end align-items-center mt-4 mt-lg-0 gap-3">
                <Button
                  variant={darkMode ? 'light' : 'dark'}
                  className={`rounded-pill d-flex align-items-center gap-2 px-4 py-2 fw-semibold border-0 ${styles.contactBtn} ${darkMode ? styles.contactBtnDark : ''}`}
                  onClick={handleContactClick}
                  style={{
                    background: darkMode ? '#ffffff' : '#111827',
                    color: darkMode ? '#111827' : '#ffffff',
                  }}
                >
                  Contact <FiArrowUpRight size={18} />
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
