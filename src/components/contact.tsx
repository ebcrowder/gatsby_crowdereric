import React from 'react';
import Layout from './layout';

const Contact = () => (
  <Layout>
    <div className="row">
      <div className="col-lg-8">
        <div className="content-column-content">
          <h1>contact</h1>
          <p className="lead">
            Contact me through any of the following mediums:
          </p>
          <p className="social">
            <a
              href="mailto:ebcrowder@gmail.com"
              data-animate-hover="pulse"
              className="email"
            >
              <i className="fas fa-envelope fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ebcrowder/"
              data-animate-hover="pulse"
              className="external linkedin"
            >
              <i className="fab fa-linkedin-in fa-2x" />
            </a>
            <a
              href="https://github.com/ebcrowder"
              data-animate-hover="pulse"
              className="external github"
            >
              <i className="fab fa-github fa-2x" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
