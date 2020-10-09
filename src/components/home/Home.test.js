import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


describe('Home', () => {
  it('should render without crash', () => {
    render(<Router><Home /></Router>);
  });

  it('should work correctly', async () => {
    render(<Router><Home /></Router>);

    expect(screen.getByText(/Find your favourite University/i)).toBeInTheDocument();

    expect(screen.getByText(/United States/i)).toBeInTheDocument();
    expect(screen.getByText(/Singapore/i)).toBeInTheDocument();

    const txtSearch = screen.getByLabelText('Search university');
    const btnSearch = screen.getByRole('button');

    expect(txtSearch).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();

    userEvent.type(txtSearch, 'indonesia');
    expect(txtSearch).toHaveValue('indonesia');

    userEvent.click(btnSearch);

    expect(mockHistoryPush).toHaveBeenCalledWith('/search?name=indonesia');
  });
});
