import { render, screen, fireEvent } from '@testing-library/react';
import { HomeContent } from '../components/HomeContent';
import { BrowserRouter } from 'react-router-dom';

describe('HomeContent', () => {
  test('renders HomeContent with correct sections and functionality', () => {
    render(
      <BrowserRouter>
        <HomeContent />
      </BrowserRouter>
    );

    const reserveButton = screen.getByRole('link', { name: /reserve a table/i });
    expect(reserveButton).toBeInTheDocument();

    fireEvent.click(reserveButton);
    expect(window.location.pathname).toBe('/reservations');

    const heading = screen.getByText(/little lemon/i);
    expect(heading).toBeInTheDocument();

    const description = screen.getByText(/We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist./i);
    expect(description).toBeInTheDocument();
  });
});
