import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/HOLA MUNDO!/i);
  expect(linkElement).toBeInTheDocument();
});

// FIXME