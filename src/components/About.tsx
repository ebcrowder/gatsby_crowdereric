import * as React from 'react';

const About = () => (
  <div>
    <h1>about</h1>

    <div className="bio">
      <p>
        I am a full-stack web developer based in sunny Portland, Oregon. In
        particular, I really enjoy working with various JavaScript libraries and
        runtimes such as React.js and Node.js. I believe in immersing myself
        fully in life and thereby fully enjoying the process, whether it be work
        or personal endeavors.
      </p>
      <p>
        When not coding, I am an avid trail runner and spend a lot of time
        running in gorgeous Forest Park. I love being a part of the trail
        running community here in the Pacific Northwest and enjoy exploring the
        many trails located in Oregon and Washington. I also really enjoy hiking
        and camping.
      </p>
    </div>

    <div>
      <h4>Skills</h4>

      <div>Programming Languages & Tools:</div>
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

    <h4>Talks</h4>
    <ul>
      <li>Gatsby JS - Front End PDX - August 2018</li>
    </ul>

    <h4>Certifications</h4>
    <ul>
      <li>Amazon Web Services (AWS) Certified Developer - Associate</li>
    </ul>
  </div>
);

export default About;
