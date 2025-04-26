import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the main application layout', () => {
    render(<App />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('renders footer content', () => {
    render(<App />);
    const footer = screen.getByText(/Footer Content/i);
    expect(footer).toBeInTheDocument();
  });
});
