import React from 'react';
import { Link } from 'gatsby';

import Layout from './layout';

const PostLink = ({ post }: any) => (
  <Layout>
    <h1>blog</h1>
    <div className="post-link">
      <Link to={post.frontmatter.path}>
        <p className="post-link-link">
          {post.frontmatter.title}
          &nbsp; (
          {post.frontmatter.date}
)
        </p>
      </Link>
    </div>
  </Layout>
);

export default PostLink;
