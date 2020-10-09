import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import SubscriptionCard from './SubscriptionCard';

describe('SubscriptionCard', () => {
  it('should render without crash', () => {
    const fakeProps = {
      setEmail: jest.fn(),
      setAgreement: jest.fn(),
      handleSubmit: jest.fn()
    };

    render(<SubscriptionCard {...fakeProps} />);
  });

  it('should show paging correctly', () => {
    const fakeProps = {
      setEmail: jest.fn(),
      setAgreement: jest.fn(),
      handleSubmit: jest.fn()
    };

    render(<SubscriptionCard {...fakeProps} />);

    expect(screen.getByText(/Let's keep in touch/i)).toBeInTheDocument();
    expect(screen.getByText(/Subscribe to keep up with fresh University news and exciting updates. We promise not to spam you./i)).toBeInTheDocument();
    expect(screen.getByText(/I agree to my email address being stored and used to receive monthly newsletter./i)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();

    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    expect(screen.getByLabelText('Enter your email address')).toBeInTheDocument();

    userEvent.type(screen.getByLabelText('Enter your email address'), 't');
    expect(fakeProps.setEmail).toBeCalled();
  });

});
