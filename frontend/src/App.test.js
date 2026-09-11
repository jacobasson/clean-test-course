import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue({
    data: { status: 'fail' },
  });

  render(<App />, { wrapper: BrowserRouter });
  expect(await screen.findByText(/Welcome/i)).toBeInTheDocument();
});
