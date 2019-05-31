import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

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

const BlogTemplate: React.FunctionComponent<PageQueryProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Layout />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {frontmatter.tags && frontmatter.tags.length ? (
          <div>
            <h4>Tags</h4>
            <ul className="taglist">
              {frontmatter.tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${tag}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date
        path
        title
        tags
      }
    }
  }
`;
