import { render, screen } from '@testing-library/react';
import { Login } from '../pages/Login';

test('renders the Login component with correct content', () => {
  render(<Login />);

  const heading = screen.getByText(/Work In Progress/i);
  const message = screen.getByText(/This page is currently under construction/i);

  expect(heading).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});
