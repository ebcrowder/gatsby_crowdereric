import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
body, html {
  background-color: #212121;
  color: #ffffff;
  font-family: 'Fira Mono', monospace;
  text-align: center;
  font-size: 18px;
  height: 100%;

  @media (max-width: 900px) {
    font-size: 16px;
  }
}

a {
  color: #fafafa;
  text-decoration: none;
}

a:hover {
  color: #00bfa5;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

p {
  padding-left: 15rem;
  padding-right: 15rem;
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
