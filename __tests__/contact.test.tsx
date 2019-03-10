import { render } from 'react-testing-library';
import * as React from 'react';
import Contact from '../src/components/Contact';

test('Render the contact page', () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId('email')).toBeInTheDocument();
  expect(getByTestId('github')).toBeInTheDocument();
});
