/* Test suite for OrderOnline component */
import { render, screen } from '@testing-library/react';
import { OrderOnline } from '../pages/OrderOnline';

test('renders OrderOnline with correct content', () => {
  render(<OrderOnline />);

  const heading = screen.getByText(/Work In Progress/i);
  const message = screen.getByText(/This page is currently under construction/i);

  expect(heading).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});