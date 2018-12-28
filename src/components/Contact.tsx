import * as React from 'react';

const Contact = () => (
  <div className="contact-container">
    <h1>contact</h1>
    <p className="lead">Contact me through any of the following mediums:</p>
    <p className="social">
      <a
        href="mailto:ebcrowder@gmail.com"
        data-animate-hover="pulse"
        className="email"
      >
        <i className="fas fa-envelope fa-2x" data-testid="email" />
      </a>
      <a
        href="https://www.linkedin.com/in/ebcrowder/"
        data-animate-hover="pulse"
        className="external linkedin"
      >
        <i className="fab fa-linkedin-in fa-2x" data-testid="linkedin" />
      </a>
      <a
        href="https://github.com/ebcrowder"
        data-animate-hover="pulse"
        className="external github"
      >
        <i className="fab fa-github fa-2x" data-testid="github" />
      </a>
    </p>
  </div>
);

export default Contact;
