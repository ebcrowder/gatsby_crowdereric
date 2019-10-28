import { render } from '@testing-library/react';
import * as React from 'react';
import Splash from '../src/components/Splash';

test('Render the splash page', () => {
  const { getByText } = render(<Splash />);
  expect(getByText('hello')).toBeInTheDocument();
});
