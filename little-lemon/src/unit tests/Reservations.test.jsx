/* Test suite for Reservations component */
import { render, screen, fireEvent } from '@testing-library/react';
import { Reservations } from '../pages/Reservations';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Reservations and interacts with form', () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );

  const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeInput = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const occasionInput = screen.getByLabelText(/Occasion/i);

  expect(submitButton).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(timeInput).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(occasionInput).toBeInTheDocument();

  fireEvent.change(dateInput, { target: { value: '2025-05-15' } });
  fireEvent.change(timeInput, { target: { value: '19:00' } });
  fireEvent.change(guestsInput, { target: { value: '2' } });
  fireEvent.change(occasionInput, { target: { value: 'Birthday' } });
  fireEvent.click(submitButton);
});