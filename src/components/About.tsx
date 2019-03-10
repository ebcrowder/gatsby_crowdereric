import * as React from 'react';

const About = () => (
  <div>
    <h1>about</h1>

    <div className="bio">
      <p>
        I am a web developer based in sunny Portland, Oregon. As a developer, I
        really enjoy collaborating with teams to solve difficult problems. In my
        spare time, I enjoy working on projects that align with my values and
        stretch my abilities.
      </p>
      <p>
        When not building things indoors, I am an avid trail runner and spend a
        lot of time running in gorgeous Forest Park. I love being a part of the
        trail running community here in the Pacific Northwest and enjoy
        exploring the many trails located in Oregon and Washington. I also
        really enjoy hiking and camping.
      </p>
    </div>

    <div>
      <h3>Skills</h3>

      <div>Programming Languages & Tools:</div>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node</li>
        <li>PHP</li>
        <li>Docker</li>
        <li>Amazon Web Services</li>
      </ul>
    </div>

    <h3>Talks</h3>
    <ul>
      <li>Gatsby JS - Front End PDX - August 2018</li>
    </ul>

    <h3>Certifications</h3>
    <ul>
      <li>Amazon Web Services (AWS) Certified Developer - Associate</li>
    </ul>
  </div>
);

export default About;
