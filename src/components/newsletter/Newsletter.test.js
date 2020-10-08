import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Newsletter from './Newsletter';
import * as api from '../api';

const mockCreateSubscriber = jest.spyOn(api, 'createSubscriber').mockImplementation(() => Promise.resolve({}));

describe('Newsletter', () => {
  it('should render without crash', () => {
    render(<Router><Newsletter/></Router>);
  });

  it('should work correctly', async () => {
    render(<Router><Newsletter/></Router>);

    expect(screen.getByText(/Let's keep in touch/i)).toBeInTheDocument();

    const subscribeBtn = screen.getByRole('button');
    expect(subscribeBtn).toBeInTheDocument();
    expect(subscribeBtn).toBeDisabled();

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveProperty('checked', false);

    const txtEmail = screen.getByLabelText('Enter your email address');
    expect(txtEmail).toBeInTheDocument();

    userEvent.type(txtEmail, 'test@hotmail.com');
    expect(subscribeBtn).toBeEnabled();

    userEvent.click(subscribeBtn);

    expect(screen.getByText(/We have to get your agreement before subscribe./i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toHaveProperty('checked', true);

    userEvent.click(subscribeBtn);

    expect(screen.getByText(/Thank you for subscribed. We have just sent the latest newsletter to test@hotmail.com./i)).toBeInTheDocument();

    expect(mockCreateSubscriber).toBeCalledTimes(1);

    expect(txtEmail).toHaveValue('');
    expect(screen.getByRole('checkbox')).toHaveProperty('checked', false);
  });

});
