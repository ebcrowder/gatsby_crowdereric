import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from './header';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/index.styl';
import '../styles/fontawesome.scss';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'eric crowder - web developer based in portland, oregon',
            },
            {
              name: 'keywords',
              content:
                'web developer, web, developer, eric crowder, eric, crowder, software, portland, oregon',
            },
          ]}
        />
        <Header />
        <div>{children}</div>
      </>
    )}
  />
);
