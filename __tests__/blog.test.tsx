import { render } from 'react-testing-library';
import * as React from 'react';
import PostLink from '../src/components/PostLink';

test('Render blog section with graphql queries', () => {
  const { getByTestId } = render(
    <PostLink
      post={{
        id: '1234abcd',
        excerpt: 'test excerpt',
        frontmatter: {
          date: '12.31.3000',
          path: '/path',
          title: 'test title',
        },
      }}
    />
  );
  expect(getByTestId('post-link-link')).toBeInTheDocument();
});
