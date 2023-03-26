import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import React from 'react';
import 'mutationobserver-shim';


test('renders the weather for Tokyo by default', async () => {
  render(<App />);
  await waitFor(() => {
    const cityElement = screen.getByText("Tokyo");
    expect(cityElement).toBeInTheDocument();
  });
});

test('renders the weather for a specific city when entered in the form', async () => {
  render(<App />);
  const cityInput = screen.getByRole('textbox');
  fireEvent.change(cityInput, { target: { value: 'Paris' } });
  fireEvent.submit(screen.getByRole('button'));
  await waitFor(() => {
    const cityElement = screen.getByText("Paris");
    expect(cityElement).toBeInTheDocument();
  });
});

test('displays an error message if the city entered is not found', async () => {
  render(<App />);
  const cityInput = screen.getByRole('textbox');
  fireEvent.change(cityInput, { target: { value: 'cityThatDoesNotExist(OrIHopeSo)' } });
  fireEvent.submit(screen.getByRole('button'));
  await waitFor(() => {
    const errorMessage = screen.getByText("Sorry, I cannot find the weather for cityThatDoesNotExist(OrIHopeSo) !");
    expect(errorMessage).toBeInTheDocument();
  });
});