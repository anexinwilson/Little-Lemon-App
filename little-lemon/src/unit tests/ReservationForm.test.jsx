import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ReservationForm } from '../components/ReservationForm';

describe('ReservationForm Component', () => {
  const renderForm = () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );
  };

  it('renders all form fields and the submit button', () => {
    renderForm();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  it('disables the submit button initially', () => {
    renderForm();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });

  it('enables the submit button when all fields are filled', async () => {
    renderForm();
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-12-25' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });
});