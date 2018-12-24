import { render } from 'react-testing-library';
import * as React from 'react';
import PostLink from '../src/components/PostLink';

test.skip('Render blog section with graphql queries', () => {
  const mockPostData = {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: '123-456-78910',
            excerpt: 'test excerpt',
            frontmatter: {
              date: 'December 31, 2042',
              path: '/2042-12-31',
              title: 'test title 123',
            },
          },
        },
      ],
    },
  };

  const { getByText } = render(<PostLink data={mockPostData} />);
  expect(getByText('test title')).toBeInTheDocument();
});
