import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Toggle from './Toggle.component';

test('test Toggle component', () => {
  render(<Toggle />);
  const navbarComponent = screen.getByTestId('toggle');

  expect(navbarComponent).toBeInTheDocument();
  expect(navbarComponent).toHaveClass('toggle');
  expect(navbarComponent).toBeVisible();

  const labelToggle = screen.getByTestId('switch');
  expect(labelToggle).toBeInTheDocument();

  const checkboxToggle = screen.getByRole('checkbox');
  expect(checkboxToggle).toBeInTheDocument();
  expect(checkboxToggle.checked).toEqual(false);

  fireEvent.click(checkboxToggle);
  expect(checkboxToggle).toBeChecked();
});

test('test Toggle check', () => {
  render(<Toggle />);

  const checkboxToggle = screen.getByRole('checkbox');
  expect(checkboxToggle).toBeInTheDocument();
  expect(checkboxToggle.checked).toEqual(false);

  fireEvent.click(checkboxToggle);
  expect(checkboxToggle).toBeChecked();
});
