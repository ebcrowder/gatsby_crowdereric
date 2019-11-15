import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

const TagRoute = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={`/blog/${post.node.fields.slug}`}>
        <b>{post.node.frontmatter.title}</b>
      </Link>
    </li>
  ));
  const tag = props.pageContext.tag;
  const title = props.data.site.siteMetadata.title;
  const totalCount = props.data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`;

  return (
    <Layout>
      <section>
        <Helmet title={`${tag} | ${title}`} />

        <div>
          <div>
            <h3>{tagHeader}</h3>
            <ul className="taglist">{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
