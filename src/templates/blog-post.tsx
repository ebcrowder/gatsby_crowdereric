import * as React from 'react';
import { graphql } from 'gatsby';

interface PageQueryProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        path: string;
        title: string;
      };
    };
  };
}

const Template: React.FunctionComponent<PageQueryProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
