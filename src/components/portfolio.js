import React from 'react';

import darling from '../img/portfolio/darling.jpg';
import serverless from '../img/portfolio/serverless.jpg';
import tree from '../img/portfolio/tree.jpg';
import ether from '../img/portfolio/ether.jpg';

const Portfolio = () => (
  <div>
    <h1>portfolio</h1>
    <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src={serverless} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="http://serverless-e-crowder.s3-website-us-east-1.amazonaws.com/">
              serverless blog
            </a>
          </h5>
          <p className="card-text">
            Blog application featuring CRUD functionality. Front-end built with
            React.js and Redux. REST API built with Express and Node.js.
            Deployed on aws using Serverless framework and aws Lambda, S3 and
            DynamoDB.
          </p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={darling} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="http://darlingdance.com/">darlingdance</a>
          </h5>
          <p className="card-text">
            Founded in 2010, darlingdance is a feminist postmodern dance company
            based in Washington, DC.
          </p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={tree} alt="tree" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="https://sheltered-brushlands-51479.herokuapp.com/">tree</a>
          </h5>
          <p className="card-text">
            Open source management software for health & wellness businesses.
            Features authentication via OAuth 2.0, scheduling, and other
            functionality. Built using React.js, Redux, Node.js, Express and
            MongoDB.
          </p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={ether} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="http://cointracker.s3-website-us-east-1.amazonaws.com/">
              bitcoin & ethereum price chart
            </a>
          </h5>
          <p className="card-text">
            Ethereum and Bitcoin price history graph built using React.js. It
            features API calls via axios to the Coinbase and Poloniex APIs and
            graphs rendered via Recharts.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
