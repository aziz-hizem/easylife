import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // framer-motion's whileInView relies on IntersectionObserver, which jsdom lacks
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders the hero heading and booking call to action', () => {
  render(<App />);
  expect(screen.getByText(/Votre Service De Ménage/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Appelez et Réservez/i })).toHaveAttribute('href', 'tel:+216 00 00 00');
});

test('lists every team member', () => {
  render(<App />);
  ['Sonia', 'Feiza', 'Fatima', 'Layla', 'Yasmine', 'Nour'].forEach((name) => {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });
});
