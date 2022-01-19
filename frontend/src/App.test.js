import { render, screen } from '@testing-library/react';
import App from './App';

test('test render 1 2', () => {
  render(<App />);
  const header = screen.getByText(/Car Rental/i);
  expect(header).toBeInTheDocument();
});
