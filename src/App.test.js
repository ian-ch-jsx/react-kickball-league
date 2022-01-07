import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/PNW Kickball League/i);
  expect(linkElement).toBeInTheDocument();
});
