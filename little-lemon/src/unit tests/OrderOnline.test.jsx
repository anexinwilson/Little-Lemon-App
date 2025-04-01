import { render, screen } from '@testing-library/react';
import { OrderOnline } from '../pages/OrderOnline';

test('renders the OrderOnline component with correct content', () => {
  render(<OrderOnline />);

  const heading = screen.getByText(/Work In Progress/i);
  const message = screen.getByText(/This page is currently under construction/i);

  expect(heading).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});
