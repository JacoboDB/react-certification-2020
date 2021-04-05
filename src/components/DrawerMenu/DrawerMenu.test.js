import React from 'react';
import { render, screen } from '@testing-library/react';

import DrawerMenu from './DrawerMenu.component';

test('test drawermenu', () => {
  render(<DrawerMenu />);
  const drawerButton = screen.getByRole('button');
  expect(drawerButton).toBeInTheDocument();
  expect(drawerButton).toHaveClass('drawer-button');
});
