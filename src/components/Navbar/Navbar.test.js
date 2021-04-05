import React from 'react';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar.component';

test('test Navbar component', () => {
  render(<Navbar />);
  const navbarComponent = screen.getByTestId('navbar');

  expect(navbarComponent).toBeInTheDocument();
  expect(navbarComponent).toHaveClass('navbar');
  expect(navbarComponent).toBeVisible();
});
