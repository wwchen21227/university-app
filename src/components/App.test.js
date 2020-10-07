import React from 'react';
import { render, screen } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
