'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, sent

  const mockSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate network delay
    setTimeout(() => {
      setStatus('sent');
      formRef.current.reset();
      
      // Auto-revert success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container text-center">
        <p className="connect-text">Connect with me</p>
        <h2 className="main-heading mb-4">Get in touch</h2>
        <p className="sub-text mx-auto" style={{ maxWidth: '600px' }}>
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below!
        </p>

        <div className="social-icons d-flex justify-content-center gap-4 mt-5 mb-5">
          <a href="https://github.com/Deekshi23" target="_blank" rel="noreferrer" className="shadow-sm p-3 rounded-circle bg-white" style={{ transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            <Image src={assets.github} alt="GitHub" width={30} height={30} />
          </a>
          <a href="https://linkedin.com/in/deekshithaa-k-074a08249/" target="_blank" rel="noreferrer" className="shadow-sm p-3 rounded-circle bg-white" style={{ transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            <Image src={assets.linkedIn} alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="mailto:deekshi1323@gmail.com" className="shadow-sm p-3 rounded-circle bg-white" style={{ transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            <Image src={assets.email3} alt="Email" width={30} height={30} />
          </a>
        </div>
        
        <form ref={formRef} onSubmit={mockSubmit} className="contact-form mx-auto mb-5">
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" required className="form-control custom-input" placeholder="Enter your name" disabled={status === 'sending'} />
            </div>
            <div className="col-md-6">
              <input type="email" required className="form-control custom-input" placeholder="Enter your email" disabled={status === 'sending'} />
            </div>
            <div className="col-12">
              <textarea required className="form-control custom-textarea" rows="5" placeholder="Enter your message" disabled={status === 'sending'} />
            </div>
            <div className="text-center mt-4">
              <button 
                type="submit" 
                style={{ 
                  marginTop: "30px", 
                  backgroundColor: status === 'sent' ? '#198754' : '#111',
                  pointerEvents: status === 'sending' ? 'none' : 'auto',
                  opacity: status === 'sending' ? 0.7 : 1
                }} 
                className="btn btn-dark"
                disabled={status === 'sending'}
              >
                {status === 'idle' && (
                  <>Submit Now <Image alt="submit" src={assets.right_arrow_white} width={18} height={18} /></>
                )}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Sent Successfully ✓'}
              </button>
              {status === 'sent' && (
                <p className="mt-3 text-success fw-semibold" style={{ animation: 'fadeIn 0.5s ease' }}>Thanks for reaching out! I'll get back to you soon.</p>
              )}
            </div>
          </div>
        </form>

        <div className="mt-5 text-muted small pb-4 border-top pt-4">
          <p>© {new Date().getFullYear()} Deekshithaa K. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
