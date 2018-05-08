import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <div>
    <div className="row">
      <div className="col-lg-8">
        <div className="content-column-content">
          <h1>about</h1>
          <p className="lead">
            I am a software engineer specializing in full-stack development and
            Javascript frameworks, such as React.js and Node.js. As a former
            accountant of 10+ years, I thrive when working with engaged teams to
            find solutions for clients. I believe in committing to mastery in
            all situations and thereby fully enjoying the process, whether it be
            work or personal endeavors.
          </p>
          <p className="lead">
            When not coding, I am an avid trail runner and spend a lot of time
            running in forest park or on the endless trails in Oregon and
            Washington. I ran my first ultra-distance marathon in 2017 (Oregon
            Coast 50k) and love being a part of the trail running community here
            in the Pacific Northwest. When I am not running, I enjoy hiking and
            camping with my dog, Jefferson.
          </p>
          <div className="row">
            <div className="col-lg-8">
              <div className="my-auto">
                <h4 className="text-uppercase">Skills</h4>

                <div className="subheading mb-3">
                  Programming Languages & Tools
                </div>
                <ul className="fa-ul mb-0">
                  <li>
                    <row className="devicons devicons-html5" />
                    <row className="devicons devicons-css3" />
                    <row className="devicons devicons-javascript" />
                    <row className="devicons devicons-react" />
                    <row className="devicons devicons-nodejs" />
                    <row className="devicons devicons-database" />
                    <row className="devicons devicons-aws" />
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
            <li>AWS Certified Developer - Associate</li>
            <li>Certified Public Accountant - Oregon # 14740 </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About
