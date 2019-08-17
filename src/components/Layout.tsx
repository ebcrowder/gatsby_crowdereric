import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
body, html {
  background-color: #ffffff;
  color: #000000;
  font-family: 'Fira Mono', monospace;
  text-align: left;
  font-size: 18px;
  height: 100%;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (max-width: 900px) {
    font-size: 16px;
  }
}

.gatsby-highlight {
  width: 800px;
  margin: 0 auto;

  pre {
    font-size: 16px;
  }

  @media (max-width: 900px) {
    width: 300px;
  
    pre {
     font-size: 10px;
    }
  }
}

a {
  color: #000000;
  text-decoration: none;
}

a:hover {
  font-weight: bold;
}

p {
  padding-top: 0;
  @media (max-width: 900px) {
    padding: 0;
  }
}

ul {
  vertical-align: middle;
  list-style-type: none;
}



`;

export default ({ children }: any) => (
  <>
    <GlobalStyle />
    <Header />
    <div>
      <main>{children}</main>
    </div>
  </>
);
