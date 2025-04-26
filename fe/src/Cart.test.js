import { render, screen } from '@testing-library/react';
import Cart from './Cart';

describe('Cart Component', () => {
  test('renders cart page heading', () => {
    render(<Cart />);
    const heading = screen.getByRole('heading', { name: /Cart Page/i });
    expect(heading).toBeInTheDocument();
  });

  test('displays empty cart message when no items are present', () => {
    render(<Cart />);
    const emptyMessage = screen.getByText(/Your cart is currently empty./i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test('renders cart items when items are present', () => {
    render(<Cart/>);
    const itemElements = screen.getByText('T-shirt');
    expect(itemElements).toBeInTheDocument();
  });
});