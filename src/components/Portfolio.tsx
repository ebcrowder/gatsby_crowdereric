import * as React from 'react';

import darling from '../img/portfolio/darling.jpg';
import serverless from '../img/portfolio/serverless.jpg';
import tree from '../img/portfolio/tree.jpg';
import ether from '../img/portfolio/ether.jpg';
import reverb from '../img/portfolio/reverb.jpg';
import trailer from '../img/portfolio/trailer.jpg';

const Portfolio = () => (
  <div>
    <h1>portfolio</h1>
    <div className="card-deck">
      <div className="card" data-testid="card-1">
        <img className="card-img-top" src={trailer} alt="trailer" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="https://obscure-everglades-66951.herokuapp.com/">
              trailer mountain
            </a>
          </h5>
          <p className="card-text">
            utilizing the MovieDB (TMDb), allows users to search the TMDb for
            movies and view related info, posters and trailers.
          </p>
        </div>
      </div>

      <div className="card" data-testid="card-2">
        <img className="card-img-top" src={darling} alt="darling" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="http://darlingdance.com/">darlingdance</a>
          </h5>
          <p className="card-text">
            founded in 2010, darlingdance is a feminist postmodern dance company
            based in Washington, DC.
          </p>
        </div>
      </div>

      <div className="card" data-testid="card-3">
        <img className="card-img-top" src={reverb} alt="reverb" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="https://sheltered-beyond-71050.herokuapp.com/">reverb</a>
          </h5>
          <p className="card-text">
            single page application for searching the Discogs database for
            albums by artist. Built with React and features CSS Grid and Styled
            Components.
          </p>
        </div>
      </div>

      <div className="card" data-testid="card-4">
        <img className="card-img-top" src={serverless} alt="serverless" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="http://serverless-e-crowder.s3-website-us-east-1.amazonaws.com/">
              serverless blog
            </a>
          </h5>
          <p className="card-text">
            blog application featuring CRUD functionality. front-end built with
            React.js and Redux. REST API built with Express and Node.js.
            deployed on aws using Serverless framework.
          </p>
        </div>
      </div>

      <div className="card" data-testid="card-5">
        <img className="card-img-top" src={tree} alt="tree" />
        <div className="card-body">
          <h5 className="card-title">
            <a href="https://sheltered-brushlands-51479.herokuapp.com/">tree</a>
          </h5>
          <p className="card-text">
            open source management software for health & wellness businesses.
            features authentication via OAuth 2.0, scheduling, and other
            functionality. built using React.js, Redux, Node.js, Express and
            MongoDB.
          </p>
        </div>
      </div>

      <div className="card" data-testid="card-6">
        <img className="card-img-top" src={ether} alt="ether" />
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
