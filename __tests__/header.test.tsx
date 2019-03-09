import { render } from 'react-testing-library';
import * as React from 'react';
import Header from '../src/components/Header';

test('Render the correct navigation links', () => {
  const { getByText, getByAltText } = render(<Header />);
  expect(getByAltText('logo')).toBeInTheDocument();
  expect(getByText('blog')).toBeInTheDocument();
  expect(getByText('about')).toBeInTheDocument();
  expect(getByText('contact')).toBeInTheDocument();
});
