import * as React from 'react';
import { Link } from 'gatsby';

interface PostLinkProps {
  post: {
    id: string;
    excerpt: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
}

const PostLink: React.FunctionComponent<PostLinkProps> = ({ post }) => (
  <>
    <h1>blog</h1>
    <div className="post-link">
      <Link to={post.frontmatter.path}>
        <p className="post-link-link" data-testid="post-link-link">
          {post.frontmatter.title}
          <span>&nbsp;</span>
          <span>{post.frontmatter.date}</span>
        </p>
      </Link>
    </div>
  </>
);

export default PostLink;
