import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <div>
    <div className="row">
      <div className="col-lg-8">
        <div className="content-column-content">
          <h1>about</h1>
          <div className="row">
            <div className="card">
              <img
                className="card-img-top"
                src={require('../img/about.jpg')}
                alt="about"
              />
              <div className="card-body">
                <p className="card-text">me!</p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require('../img/jefferson.jpg')}
                alt="jefferson"
              />
              <div className="card-body">
                <p className="card-text">jefferson!</p>
              </div>
            </div>
          </div>
          <p className="lead">
            I am a software engineer specializing in full-stack web development.
            In particular, I really enjoy working with various Javascript
            libraries and runtimes such as React.js and Node.js. As a former
            accountant of 10+ years, I thrive when working with engaged teams to
            find solutions for clients. I believe in immersing myself fully in
            life and thereby fully enjoying the process, whether it be work or
            personal endeavors.
          </p>
          <p className="lead">
            When not coding, I am an avid trail runner and spend a lot of time
            running in gorgeous forest park or on the endless trails in Oregon
            and Washington. I ran my first ultra-distance marathon in 2017
            (Oregon Coast 50k) and love being a part of the trail running
            community here in the Pacific Northwest. When I am not running, I
            enjoy hiking and camping with my dog, Jefferson.
          </p>
          <div className="row">
            <div className="col-lg-8">
              <div className="my-auto">
                <h4 className="text-uppercase">Skills</h4>

                <div className="subheading mb-3">
                  Programming Languages & Tools:
                </div>
                <ul className="code-languages">
                  <li>
                    <i className="fab fa-html5 fa-2x" />
                    <i className="fab fa-css3-alt fa-2x" />
                    <i className="fab fa-js fa-2x" />
                    <i className="fab fa-react fa-2x" />
                    <i className="fab fa-node fa-2x" />
                    <i className="fas fa-database fa-2x" />
                  </li>
                </ul>

                <h4 className="text-uppercase">Workflow</h4>
                <ul>
                  <li>Agile Development & Scrum</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" />
          </div>

          <h4 className="text-uppercase">Education</h4>
          <ul>
            <li>
              The Tech Academy - Software Developer Certificate - December 2017
            </li>
            <li>Longwood University - BSBA - Accounting - May 2007 </li>
          </ul>

          <h4 className="text-uppercase">Certifications</h4>
          <ul>
            <li>Amazon Web Services (AWS) Certified Developer - Associate</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About
