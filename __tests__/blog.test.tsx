import { render } from '@testing-library/react';
import * as React from 'react';
import PostLink from '../src/components/PostLink';

test('Render blog section with graphql queries', () => {
  const { getByTestId } = render(
    <PostLink
      post={{
        excerpt: 'test excerpt',
        frontmatter: {
          date: '12.31.3000',
          path: '/path',
          title: 'test title',
        },
        id: '1234abcd',
        timeToRead: 5,
      }}
    />
  );
  expect(getByTestId('post-link-link')).toBeInTheDocument();
});
