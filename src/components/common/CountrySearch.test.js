import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import CountrySearch from './CountrySearch';

describe('CountrySearch', () => {
  it('should render without crash', () => {
    const fakeProps = {
      country: '',
      setCountry: jest.fn()
    };

    render(<CountrySearch {...fakeProps} />);
  });

  it('should works correctly', () => {
    const fakeProps = {
      country: '',
      setCountry: jest.fn()
    };

    render(<CountrySearch {...fakeProps} />);

    const txtSearch = screen.getByLabelText('Search country');
    expect(txtSearch).toBeInTheDocument();

    userEvent.type(txtSearch, 'indonesia');
    expect(txtSearch).toHaveValue('indonesia');
  });

});
