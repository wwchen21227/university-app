import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import UniversitySearch from './UniversitySearch';

describe('UniversitySearch', () => {
  it('should render without crash', () => {
    const fakeProps = {
      searchTerm: '',
      setSearchTerm: jest.fn()
    };

    render(<UniversitySearch {...fakeProps} />);
  });

  it('should works correctly', async () => {
    const fakeProps = {
      searchTerm: '',
      setSearchTerm: jest.fn()
    };

    render(<UniversitySearch {...fakeProps} />);

    const txtSearch = screen.getByLabelText('Search university');
    expect(txtSearch).toBeInTheDocument();

    userEvent.type(txtSearch, 'national');
    expect(fakeProps.setSearchTerm).toHaveBeenCalledTimes(8);
  });
});
