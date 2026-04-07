import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero content', () => {
  render(<App />);
  expect(screen.getByText(/neutral luxury nail experience/i)).toBeInTheDocument();
  expect(screen.getByText(/elegance in every detail\./i)).toBeInTheDocument();
});
