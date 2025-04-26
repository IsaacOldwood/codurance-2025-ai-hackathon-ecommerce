import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders cart page with heading and empty message', () => {
  render(<Cart />);
  const heading = screen.getByText(/Cart Page/i);
  const message = screen.getByText(/Your cart is currently empty./i);
  expect(heading).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});