import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';

import '../styles/index.styl';
import '../styles/fontawesome.scss';

export default ({ children }: any) => (
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
      <Fragment>
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
      </Fragment>
    )}
  />
);
