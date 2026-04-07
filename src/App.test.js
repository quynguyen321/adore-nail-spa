import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero content', () => {
  render(<App />);
  expect(screen.getByText(/nail care experience/i)).toBeInTheDocument();
  expect(screen.getByText(/beauty that feels polished, effortless, and refined\./i)).toBeInTheDocument();
});
