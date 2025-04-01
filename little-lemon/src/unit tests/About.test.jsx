import { render, screen } from '@testing-library/react';
import { About } from '../components/About';
import { BrowserRouter } from 'react-router-dom'; 

test('renders the About component with correct content', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );

  const restaurantNames = screen.getAllByText(/Little Lemon/i);
  expect(restaurantNames.length).toBeGreaterThan(0); 
  
  const location = screen.getByText(/Chicago/i);
  expect(location).toBeInTheDocument();

  const description = screen.getByText(/We are a family owned Mediteranian restaurant/i);
  expect(description).toBeInTheDocument();
});
