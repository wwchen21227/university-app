import React, { useState } from 'react';
import { validateEmail } from 'utils';
import { Alert } from 'react-bootstrap';
import SubscriptionCard from './SubscriptionCard';
import { createSubscriber } from '../api';

import './newsletter.scss';

const AlertType = {
  NONE: '',
  ERROR: 'danger',
  SUCCESS: 'success'
};

const TIME_TO_RESET_ALERT = 20000; // 20 seconds

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [alert, setAlert] = useState(null);

  const isValid = () => {
    if (!agreement) {
      setAlert({
        type: AlertType.ERROR,
        message: 'We have to get your agreement before subscribe.'
      });
      return false;
    }

    if (!validateEmail(email)) {
      setAlert({
        type: AlertType.ERROR,
        message: 'Please enter a valid email address.'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) return;

    createSubscriber({ email });

    setAlert({
      type: AlertType.SUCCESS,
      message: `Thank you for subscribed. We have just sent the latest newsletter to ${email}.`
    });

    setEmail('');
    setAgreement(false);

    setTimeout(() => setAlert(null), TIME_TO_RESET_ALERT);
  };

  return (
    <div className="main-container main-container--full-height newsletter-page-container">
      <div className="subscribe-box subscribe-box--v-align">
        <SubscriptionCard
          email={email}
          setEmail={setEmail}
          agreement={agreement}
          setAgreement={setAgreement}
          handleSubmit={handleSubmit}
        />

        {alert && (
          <Alert variant={alert.type} className="mt-3">
            {alert.message}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
