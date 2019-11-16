import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface PostLinkProps {
  post: {
    id: string;
    excerpt: string;
    timeToRead: number;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
}

const Excerpt = styled.p`
  margin-left: 1vw;
  margin-right: 1vw;
`;

const Caption = styled.p`
  margin-left: 1vw;
  margin-right: 1vw;
`;

const PostLink: React.FunctionComponent<PostLinkProps> = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <p data-testid="post-link-link">
        <h1>{post.frontmatter.title}</h1>
      </p>
    </Link>
    <Caption>{post.frontmatter.date}</Caption>
    <div>
      <Excerpt>
        <i>{post.excerpt}</i>
      </Excerpt>
      <Caption>
        <b>time to read:</b> {post.timeToRead} minutes
      </Caption>
    </div>
  </div>
);

export default PostLink;
