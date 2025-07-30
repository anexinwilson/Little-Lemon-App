/* Test suite for Footer component */
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';

vi.mock('lucide-react', () => ({
  Facebook: () => <span>Facebook icon</span>,
  Twitter: () => <span>Twitter icon</span>,
  Instagram: () => <span>Instagram icon</span>,
  Youtube: () => <span>Youtube icon</span>,
  Mail: () => <span>Mail icon</span>,
  MapPin: () => <span>MapPin icon</span>,
  Phone: () => <span>Phone icon</span>
}));

describe('Footer', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it('renders Footer with correct links and icons', () => {
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();

    expect(document.querySelector('a[href="https://facebook.com"]')).toBeInTheDocument();
    expect(document.querySelector('a[href="https://instagram.com"]')).toBeInTheDocument();
    
    expect(screen.getByText(/123 Olive Street, Seattle, WA/)).toBeInTheDocument();
    expect(screen.getByText(/\(206\) 555-7890/)).toBeInTheDocument();
    expect(screen.getByText(/hello@littlelemon.com/)).toBeInTheDocument();
  });
});