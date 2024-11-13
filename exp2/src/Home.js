import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="name-title">Nadin C</h1>
      <img
        src="https://th.bing.com/th?id=OIP.4nBvLMYKlGTI5JfKj643XgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        alt="Profile"
        className="profile-image"
      />
      <p className="subtitle">Pre-Final Year Student</p>

      <div className="about-section">
        <p>
          Enthusiastic and dedicated software engineering student with hands-on
          experience in web development. Skilled in modern JavaScript frameworks
          and libraries, with a passion for creating seamless user experiences.
        </p>
      </div>

      <div className="links-container">
        <a
          href="https://github.com/nadin-c"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item"
        >
          <img src="./github-dark.svg" alt="GitHub" className="social-icon" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nadin-c"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item"
        >
          <img src="./linkedin-dark.svg" alt="LinkedIn" className="social-icon" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Home;
