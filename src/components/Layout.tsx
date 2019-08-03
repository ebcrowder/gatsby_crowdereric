import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
body, html {
  background-color: #ffffff;
  color: #000000;
  font-family: 'Fira Mono', monospace;
  text-align: center;
  font-size: 18px;
  height: 100%;

  @media (max-width: 900px) {
    font-size: 16px;
  }
}

a {
  color: #000000;
  text-decoration: none;
}

a:hover {
  color: #546e7a;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

p {
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 0;

  @media (max-width: 900px) {
    padding: 0;
  }
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
