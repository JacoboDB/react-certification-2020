import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from './Loading.component';

test('test Loading component', () => {
  render(<Loading />);
  const loadingComponent = screen.getByTestId('loading');

  expect(loadingComponent).toBeInTheDocument();
  expect(loadingComponent).toHaveClass('loading');
  expect(loadingComponent).toBeVisible();

  const loadingText = screen.getByText(/Loading.../i, { selector: 'p' });
  expect(loadingText).toBeInTheDocument();
  expect(loadingText).toBeVisible();
});
