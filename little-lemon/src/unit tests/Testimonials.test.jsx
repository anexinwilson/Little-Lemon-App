import { render, screen } from '@testing-library/react';
import { Testimonials } from '../components/Testimonials';

test('renders the Testimonials component with customer reviews', () => {
  render(<Testimonials />);

  const heading = screen.getByText(/Kind Words From Happy Customers!/i);
  const customerA = screen.getByText(/Ava R./i);
  const customerB = screen.getByText(/Liam J./i);
  const customerC = screen.getByText(/Sofia M./i);
  const customerD = screen.getByText(/Ethan B./i);

  expect(heading).toBeInTheDocument();
  expect(customerA).toBeInTheDocument();
  expect(customerB).toBeInTheDocument();
  expect(customerC).toBeInTheDocument();
  expect(customerD).toBeInTheDocument();
});
