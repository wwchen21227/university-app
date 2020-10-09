import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountryCardList from './CountryCardList';

describe('CountryCardList', () => {
  it('should render without crash', () => {
    const fakeProps = {
      countries: []
    };

    render(<CountryCardList {...fakeProps} />);
  });

  it('should works correctly', () => {
    const fakeProps = {
      countries: [
        {
          name: 'United States',
          code: 'US',
          image:
            'https://www-media.stanford.edu/wp-content/uploads/2017/06/20191526/stanford-share.jpg'
        },
        {
          name: 'United Kingdom',
          code: 'GB',
          image:
            'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/12/oxford-1576245233.jpg'
        }
      ]
    };

    render(<CountryCardList {...fakeProps} />);

    expect(screen.getByText(/Top Countries/i)).toBeInTheDocument();

    expect(screen.getByText(/United States/i)).toBeInTheDocument();

    expect(screen.getByText(/United Kingdom/i)).toBeInTheDocument();
  });
});
