import * as React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';

interface BlogProps {
  data: any;
  edges: any;
  edge: any;
}

const Blog: React.StatelessComponent<BlogProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date)
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />);

  return <div>{Posts}</div>;
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
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
