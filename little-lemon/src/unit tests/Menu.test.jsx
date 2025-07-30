/* Test suite for Menu component */
import { render, screen } from '@testing-library/react';
import { Menu } from '../components/Menu';

describe('Menu Component', () => {
  beforeEach(() => {
    render(<Menu />);
  });

  it('renders specials header', () => {
    expect(screen.getByText(/This Week’s Specials!/i)).toBeInTheDocument();
  });

  it('renders Greek Salad details correctly', () => {
    const greekSaladElements = screen.getAllByText(/Greek Salad/i);
    expect(greekSaladElements.length).toBeGreaterThan(0); 
    expect(greekSaladElements[0]).toBeInTheDocument(); 

    expect(
      screen.getByText(
        /The famous Greek salad of crispy lettuce, cucumbers, tomatoes, onions, feta cheese, and olives\./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/\$12\.99/i)).toBeInTheDocument();
  });

  it('renders Bruschetta details correctly', () => {
    expect(screen.getByText(/Bruschetta/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Fresh tomatoes, garlic, and basil served on toasted bread and topped with parmesan cheese\./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/\$8\.99/i)).toBeInTheDocument();
  });

  it('renders Lemon Dessert details correctly', () => {
    expect(screen.getByText(/Lemon Dessert/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /A light lemon cake with glaze, served with vanilla ice cream\. A family recipe favorite!/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/\$5\.00/i)).toBeInTheDocument();
  });

  it('displays a delivery icon for each menu item', () => {
    const deliveryIcons = screen.getAllByAltText(/delivery/i);
    expect(deliveryIcons).toHaveLength(3);
  });

  it('has an "Online Menu" button', () => {
    const onlineMenuButton = screen.getByRole('button', { name: /online menu/i });
    expect(onlineMenuButton).toBeInTheDocument();
  });
});