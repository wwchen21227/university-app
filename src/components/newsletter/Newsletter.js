import React, { useState } from 'react';
import { validateEmail } from 'utils';
import SubscriptionCard from './SubscriptionCard';
import { createSubscriber } from '../api';

import './newsletter.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreement) {
      alert('We have to get your agreement before subscribe.');
      return;
    }
    if(!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    createSubscriber({email});

    setEmail('');
    setAgreement(false);
  };

  return (
    <div className="main-container main-container--full-height newsletter-page-container">
      <SubscriptionCard
        email={email}
        setEmail={setEmail}
        agreement={agreement}
        setAgreement={setAgreement}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Newsletter;
