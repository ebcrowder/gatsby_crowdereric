// @flow

import React, { Component } from 'react';
import posed from 'react-pose';

import Me from '../img/about.jpg';
import Jefferson from '../img/jefferson.jpg';

const CardAnimate = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.01 },
});

type State = {
  hovering1: boolean,
  hovering2: boolean,
};

type Props = {
  className: string,
  pose: string,
};

export default class About extends Component<Props, State> {
  state = {
    hovering1: false,
    hovering2: false,
  };

  render() {
    return (
      <div>
        <h1>about</h1>
        <div className="about">
          <CardAnimate
            className="card"
            pose={this.state.hovering1 ? 'hovered' : 'idle'}
            onMouseEnter={() => this.setState({ hovering1: true })}
            onMouseLeave={() => this.setState({ hovering1: false })}
          >
            <img className="card-img-top-about" src={Me} alt="about" />
            <div className="card-body">
              <p className="card-text">me!</p>
            </div>
          </CardAnimate>
          <CardAnimate
            className="card"
            pose={this.state.hovering2 ? 'hovered' : 'idle'}
            onMouseEnter={() => this.setState({ hovering2: true })}
            onMouseLeave={() => this.setState({ hovering2: false })}
          >
            <img
              className="card-img-top-about"
              src={Jefferson}
              alt="jefferson"
            />
            <div className="card-body">
              <p className="card-text">jefferson!</p>
            </div>
          </CardAnimate>
        </div>
        <p className="lead">
          I am a full-stack web developer based in sunny Portland, Oregon. In
          particular, I really enjoy working with various JavaScript libraries
          and runtimes such as React.js and Node.js. As a former accountant of
          10+ years, I thrive when working with engaged teams to find solutions
          for clients. I believe in immersing myself fully in life and thereby
          fully enjoying the process, whether it be work or personal endeavors.
        </p>
        <p className="lead">
          When not coding, I am an avid trail runner and spend a lot of time
          running in gorgeous Forest Park or on the endless trails in Oregon and
          Washington. I ran my first ultra-distance marathon in 2017 (Oregon
          Coast 50k) and love being a part of the trail running community here
          in the Pacific Northwest. I also really enjoy hiking and camping with
          my dog, Jefferson.
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
    );
  }
}
