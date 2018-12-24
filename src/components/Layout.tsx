import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';

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
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              content: 'eric crowder - web developer based in portland, oregon',
              name: 'description',
            },
            {
              content:
                'web developer, web, developer, eric crowder, eric, crowder, software, portland, oregon',
              name: 'keywords',
            },
          ]}
        />
        <Header />
        <div>{children}</div>
      </>
    )}
  />
);
