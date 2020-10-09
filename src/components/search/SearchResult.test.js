import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchResult from './SearchResult';

describe('SearchResult', () => {
  it('should render without crash', () => {
    const fakeProps = {
      results: [],
      currentPage: 1,
      setCurrentPage: jest.fn(),
      maxPages: 2,
      totalResults: 12
    };

    render(<SearchResult {...fakeProps} />);
  });

  it('should show no result', () => {
    const fakeProps = {
      results: [],
      currentPage: 1,
      setCurrentPage: jest.fn(),
      maxPages: 2,
      totalResults: 0
    };

    render(<SearchResult {...fakeProps} />);

    expect(screen.getByText(/No result found./i)).toBeInTheDocument();
  });

  it('should show no result', () => {
    const fakeProps = {
      results: [
        {
          "name": "Aventis School of Management",
          "state-province": null,
          "alpha_two_code": "SG",
          "country": "Singapore",
          "web_pages": [
            "http://www.aventis.edu.sg/"
          ],
          "domains": [
            "aventis.edu.sg"
          ]
        }
      ],
      currentPage: 1,
      setCurrentPage: jest.fn(),
      maxPages: 1,
      totalResults: 1
    };

    render(<SearchResult {...fakeProps} />);

    expect(screen.getByText(/Aventis School of Management/i)).toBeInTheDocument();
    expect(screen.getByText(/Singapore/i)).toBeInTheDocument();
    expect(screen.getByText(/All around the world/i)).toBeInTheDocument();
    expect(screen.getByText(/1 results/i)).toBeInTheDocument();

    expect(screen.getByText('aventis.edu.sg')).toBeInTheDocument();
    expect(screen.getByText('http://www.aventis.edu.sg/')).toBeInTheDocument();

    expect(screen.getByText(/Previous Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Page/i)).toBeDisabled();

    expect(screen.getByText(/Next Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Next Page/i)).toBeDisabled();
  });
});
