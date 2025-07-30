/* Test suite for Home component */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../pages/Home';

describe('Home Page', () => {
  it('renders all sections except HomeContent', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("This Week’s Specials!")).toBeInTheDocument();
    expect(screen.getByText(/Kind Words From Happy Customers!/i)).toBeInTheDocument();
    
    const descriptionElements = screen.getAllByText(/We are a family owned Mediterranean restaurant/i);
    expect(descriptionElements.length).toBeGreaterThan(0); 
  });
});