import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
body, html {
  background-color: #212121;
  color: #ffffff;
  font-family: 'Fira Code', monospace;
  text-align: center;
  font-size: 18px;
  height: 100%;
}

a {
  color: #fafafa;
}

a:hover {
  color: #00bfa5;
}

li {
  list-style-type: none;
}
`;

export default ({ children }: any) => (
  <>
    <GlobalStyle />
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
  </>
);
