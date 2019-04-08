import { render } from 'react-testing-library';
import * as React from 'react';
import Contact from '../src/components/Contact';

test('Render the contact component', () => {
  const { getByText } = render(<Contact />);
  expect(getByText('me')).toBeInTheDocument();
});
