import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

interface PageQueryProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const CVTemplate: React.FunctionComponent<PageQueryProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <>
      <Layout />
      <div className="cv-container">
        <div className="cv-post">
          <p
            className="cv-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  );
};

export default CVTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
