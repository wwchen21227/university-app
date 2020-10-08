import React, { useState } from 'react';
import { validateEmail } from 'utils';
import { Alert } from 'react-bootstrap';
import SubscriptionCard from './SubscriptionCard';
import { createSubscriber } from '../api';

import './newsletter.scss';

const AlertType = {
  NONE: '',
  ERROR: 'danger',
  SUCCESS: 'success',
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [alertType, setAlertType] = useState(AlertType.NONE);
  const [alertMessage, setAlertMessage] = useState('');

  const isValid = () => {
    if (!agreement) {
      setAlertMessage('We have to get your agreement before subscribe.');
      setAlertType(AlertType.ERROR);
      return false;
    }

    if(!validateEmail(email)) {
      setAlertMessage('Please enter a valid email address.');
      setAlertType(AlertType.ERROR);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isValid()) return;

    createSubscriber({email});

    setAlertType(AlertType.SUCCESS);
    setAlertMessage(`Thank you for subscribed. We have just sent the latest newsletter to ${email}.`);

    setEmail('');
    setAgreement(false);
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

        {alertType !== AlertType.NONE && (
        <Alert variant={alertType} className="mt-3">
          {alertMessage}
        </Alert>
         )}
      </div>

    </div>
  );
};

export default Newsletter;
