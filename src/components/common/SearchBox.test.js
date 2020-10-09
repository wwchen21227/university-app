import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
  it('should render without crash', () => {
    const fakeProps = {
      title: ''
    };

    render(
      <SearchBox {...fakeProps}>
        <div>Search here</div>
      </SearchBox>
    );
  });

  it('should works correctly', async () => {
    const fakeProps = {
      title: 'Search university now'
    };

    render(
      <SearchBox {...fakeProps}>
        <div>Search here</div>
      </SearchBox>
    );

    expect(screen.getByText(/Search university now/i)).toBeInTheDocument();
  });
});
