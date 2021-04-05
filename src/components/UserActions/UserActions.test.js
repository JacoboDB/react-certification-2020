import React from 'react';
import { render, screen } from '@testing-library/react';

import UserActions from './UserActions.component';

test('test UserActions component', () => {
  render(<UserActions />);
  const userComponent = screen.getByTestId('user-actions');

  expect(userComponent).toBeInTheDocument();
  expect(userComponent).toHaveClass('user-actions');
  expect(userComponent).toBeVisible();
});
