import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
  <h1>Contact Page</h1>
    <p>Get in touch with us!</p>
      <div className="section-box">
  
        <div className="contact-info">
        
          <a 
            href="tel:+9055271111" 
            className="contact-item"
          >
            <FaPhone className="contact-icon" />
            <div className="contact-text">
         
              <p>+1 (905) 527-1111</p>
            </div>
          </a>
          <a 
            href="wecareaboutanimals@brocku.ca" 
            className="contact-item"
          >
            <FaEnvelope className="contact-icon" />
            <div className="contact-text">
             
              <p>wecareaboutanimals@brocku.ca</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
