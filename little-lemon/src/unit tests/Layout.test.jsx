import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Layout } from '../pages/Layout';

vi.mock('../assets/images/Logo.svg', () => ({ default: 'logo.svg' }));
vi.mock('../components/Footer', () => ({ Footer: () => <footer data-testid="footer-mock">Mock Footer</footer> }));

const mockScrollTo = vi.fn();
const mockQuerySelector = vi.fn();

describe('Layout Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = mockScrollTo;
    document.querySelector = mockQuerySelector;
    mockQuerySelector.mockReturnValue({ offsetTop: 500 }); 
  });

  const renderWithRouter = (initialPath = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<span>Home Page Content</span>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  it('should render the logo, navigation links, Outlet, and Footer', () => {
    renderWithRouter();

    const logoImg = screen.getByRole('img', { name: /little lemon logo/i });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', 'logo.svg');
    expect(logoImg.closest('a')).toHaveAttribute('href', '/');

    expect(screen.getByRole('link', { name: 'HOME' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'MENU' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ABOUT' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'RESERVATIONS' })).toHaveAttribute('href', '/reservations');
    expect(screen.getByRole('link', { name: 'ORDER ONLINE' })).toHaveAttribute('href', '/order');
    expect(screen.getByRole('link', { name: 'LOGIN' })).toHaveAttribute('href', '/login');

    expect(screen.getByText('Home Page Content')).toBeInTheDocument();

    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
  });

  it('should scroll to #menu when MENU is clicked on the homepage', () => {
    renderWithRouter('/'); 
    const menuLink = screen.getByRole('link', { name: 'MENU' });

    fireEvent.click(menuLink);

    expect(mockQuerySelector).toHaveBeenCalledWith('#menu');
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 500 - 80, behavior: 'smooth' });
  });

  it('should scroll to #about when ABOUT is clicked on the homepage', () => {
    renderWithRouter('/'); 
    mockQuerySelector.mockReturnValue({ offsetTop: 1000 }); 
    const aboutLink = screen.getByRole('link', { name: 'ABOUT' });

    fireEvent.click(aboutLink);

    expect(mockQuerySelector).toHaveBeenCalledWith('#about');
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 1000 - 80, behavior: 'smooth' });
  });

  it('should not scroll if element is not found', () => {
    renderWithRouter('/');
    mockQuerySelector.mockReturnValue(null); 
    const menuLink = screen.getByRole('link', { name: 'MENU' });

    fireEvent.click(menuLink);

    expect(mockQuerySelector).toHaveBeenCalledWith('#menu');
    expect(mockScrollTo).not.toHaveBeenCalled();
  });
});