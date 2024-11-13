import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>lipigava.22it@kongu.edu</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+91 8667314300</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>LIG - 192, New Rayakottai Hudco Phase 10, Hosur.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
