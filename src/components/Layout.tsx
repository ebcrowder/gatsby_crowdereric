import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
body, html {
  background-color: #ffffff;
  color: #000000;
  font-family: Menlo, Monaco, Courier New, monospace, serif; 
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

p > a {
  text-decoration-line: underline;
  text-decoration-color: #FF0266;
  text-decoration-style: solid;
  font-weight: bold;
}

p {
  padding-top: 0;
  @media (max-width: 900px) {
    padding: 0;
  }
}

ol > li {
  margin: 20px;
}

// code blocks 
pre[class*='language-'] {
  overflow: auto;
  padding: 1.3125rem;
}

code[class*='language-'],
pre[class*='language-'] {
  color: #e6e6e6; 
  background-color: hsl(222, 14%, 25%); 
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  margin-bottom: 0;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

:not(pre) > code[class*='language-'] {
  border-radius: 0.3em;
  background: var(--inlineCode-bg);
  color: var(--inlineCode-text);
  padding: 0.15em 0.2em 0.05em;
  white-space: normal;
}

.token.attr-name {
  color: rgb(173, 219, 103);
  font-style: italic;
}

.token.comment {
  color: rgb(128, 147, 147);
}

.token.string,
.token.url {
  color: rgb(173, 219, 103);
}

.token.variable {
  color: rgb(214, 222, 235);
}

.token.number {
  color: rgb(247, 140, 108);
}

.token.builtin,
.token.char,
.token.constant,
.token.function {
  color: rgb(130, 170, 255);
}

.token.punctuation {
  color: rgb(199, 146, 234);
}

.token.selector,
.token.doctype {
  color: rgb(199, 146, 234);
  font-style: 'italic';
}

.token.class-name {
  color: rgb(255, 203, 139);
}

.token.tag,
.token.operator,
.token.keyword {
  color: #ffa7c4;
}

.token.boolean {
  color: rgb(255, 88, 116);
}

.token.property {
  color: rgb(128, 203, 196);
}

.token.namespace {
  color: rgb(178, 204, 214);
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
