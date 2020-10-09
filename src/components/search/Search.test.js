import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './Search';

describe('Search', () => {
  it('should render without crash', () => {
    window.scrollTo = jest.fn();
    render(
      <Router>
        <Search />
      </Router>
    );
  });

  it('should work correctly', async () => {
    window.scrollTo = jest.fn();
    render(
      <Router>
        <Search />
      </Router>
    );

    expect(
      screen.getByText(/Search your favourite University/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/All around the world/i)).toBeInTheDocument()
    );

    expect(screen.getByText(/Previous Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Page/i)).toBeDisabled();

    expect(screen.getByText(/Next Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Next Page/i)).toBeEnabled();

    userEvent.click(screen.getByText(/Next Page/i));
    expect(screen.getByText(/Previous Page/i)).toBeEnabled();
  });
});
