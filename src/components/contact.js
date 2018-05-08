import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div className="row">
    <div className="col-lg-8">
      <div className="content-column-content">
        <h1>contact</h1>
        <p className="lead">
          I am available to work on open-source projects, contract and freelance
          work.
        </p>
        <p className="lead">Contact me through any of the following mediums:</p>
        <p className="social">
          <a
            href="https://www.linkedin.com/in/ebcrowder/"
            data-animate-hover="pulse"
            className="external linkedin"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="mailto:ebcrowder@gmail.com"
            data-animate-hover="pulse"
            className="email"
          >
            <i className="fas fa-envelope" />
          </a>
          <a
            href="https://github.com/ebcrowder"
            data-animate-hover="pulse"
            className="external github"
          >
            <i className="fab fa-github" />
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Contact
