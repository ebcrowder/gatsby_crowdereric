import { render } from 'react-testing-library';
import * as React from 'react';
import Portfolio from '../src/components/Portfolio';

test('Render the portfolio gallery', () => {
  const { getByTestId } = render(<Portfolio />);
  expect(getByTestId('card-1')).toBeInTheDocument();
  expect(getByTestId('card-2')).toBeInTheDocument();
  expect(getByTestId('card-3')).toBeInTheDocument();
  expect(getByTestId('card-4')).toBeInTheDocument();
  expect(getByTestId('card-5')).toBeInTheDocument();
  expect(getByTestId('card-6')).toBeInTheDocument();
});
