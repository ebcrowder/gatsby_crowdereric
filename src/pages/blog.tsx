import * as React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import PostLink from '../components/PostLink';

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            excerpt: string;
            frontmatter: {
              date: string;
              path: string;
              title: string;
            };
          };
        }
      ];
    };
  };
}

const Blog: React.FunctionComponent<BlogProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <>
      <SEO title="blog" />
      <div>{Posts}</div>
    </>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
