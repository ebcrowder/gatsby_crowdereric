import { render } from '@testing-library/react';
import * as React from 'react';
import Box from '../src/components/Box';

test('Render the correct title and text items', () => {
  const { getByText } = render(
    <Box title="Toolbox" text={['JavaScript', 'TypeScript']} />
  );
  expect(getByText('Toolbox')).toBeInTheDocument();
  expect(getByText('TypeScript')).toBeInTheDocument();
});
