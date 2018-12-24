import React from 'react';
import Layout from './Layout';

const About = () => {
  return (
    <Layout>
      <div>
        <h1>about</h1>

        <div className="bio">
          <p className="lead">
            I am a full-stack web developer based in sunny Portland, Oregon. In particular, I really
            enjoy working with various JavaScript libraries and runtimes such as React.js and
            Node.js. I believe in immersing myself fully in life and thereby fully enjoying the
            process, whether it be work or personal endeavors.
          </p>
          <p className="lead">
            When not coding, I am an avid trail runner and spend a lot of time running in gorgeous
            Forest Park. I love being a part of the trail running community here in the Pacific
            Northwest and enjoy exploring the many trails located in Oregon and Washington. I also
            really enjoy hiking and camping.
          </p>
        </div>

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
    </Layout>
  );
};

export default About;
