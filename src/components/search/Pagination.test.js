import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('should render without crash', () => {
    const fakeProps = {
      currentPage: 1,
      setCurrentPage: jest.fn(),
      maxPages: 2
    };

    render(<Pagination {...fakeProps} />);
  });

  it('should show paging correctly', () => {
    const fakeProps = {
      currentPage: 1,
      setCurrentPage: jest.fn(),
      maxPages: 2
    };

    render(<Pagination {...fakeProps} />);

    expect(screen.getByText(/Previous Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Page/i)).toBeDisabled();

    expect(screen.getByText(/Next Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Next Page/i)).toBeEnabled();
  });
});
