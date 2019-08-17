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
  <div>
    <Link to={post.frontmatter.path}>
      <p data-testid="post-link-link">
        {post.frontmatter.title}
        <span>&nbsp;</span>
        <span>{post.frontmatter.date}</span>
      </p>
    </Link>
  </div>
);

export default PostLink;
