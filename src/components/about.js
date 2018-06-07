import React from 'react';

import Me from '../img/about.jpg';
import Jefferson from '../img/jefferson.jpg';

const About = () => (
  <div>
    <h1>about</h1>
    <div className="about">
      <div className="card">
        <img className="card-img-top-about" src={Me} alt="about" />
        <div className="card-body">
          <p className="card-text">me!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top-about" src={Jefferson} alt="jefferson" />
        <div className="card-body">
          <p className="card-text">jefferson!</p>
        </div>
      </div>
    </div>
    <p className="lead">
      I am a full-stack web developer based in sunny Portland, Oregon. In
      particular, I really enjoy working with various JavaScript libraries and
      runtimes such as React.js and Node.js. As a former accountant of 10+
      years, I thrive when working with engaged teams to find solutions for
      clients. I believe in immersing myself fully in life and thereby fully
      enjoying the process, whether it be work or personal endeavors.
    </p>
    <p className="lead">
      When not coding, I am an avid trail runner and spend a lot of time running
      in gorgeous forest park or on the endless trails in Oregon and Washington.
      I ran my first ultra-distance marathon in 2017 (Oregon Coast 50k) and love
      being a part of the trail running community here in the Pacific Northwest.
      I also really enjoy hiking and camping with my dog, Jefferson.
    </p>

    <div className="my-auto">
      <h4 className="text-uppercase">Skills</h4>

      <div className="subheading mb-3">Programming Languages & Tools:</div>
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
    </div>

    <h4 className="text-uppercase">Education</h4>
    <ul>
      <li>The Tech Academy - Software Developer Certificate - December 2017</li>
      <li>Longwood University - BSBA - Accounting - May 2007 </li>
    </ul>

    <h4 className="text-uppercase">Certifications</h4>
    <ul>
      <li>Amazon Web Services (AWS) Certified Developer - Associate</li>
    </ul>
  </div>
);

export default About;
