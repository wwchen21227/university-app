import React, { useState, useEffect } from 'react';
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { createSubscriber } from './api';

import './newsletter.scss';

const validateEmail = (email) => {
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return pattern.test(email);
};

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
    console.log(email);
    createSubscriber({email});

    setEmail('');
    setAgreement(false);
  };

  return (
    <div className="main-container main-container--full-height">
      <div className="card subscribe-box subscribe-box--v-align">
        <div className="card-body">
          <h3 className="subscribe-box-title">Let's keep in touch</h3>
          <p className="subscribe-box-message">
            Subscribe to keep up with fresh University news and exciting updates. <br />
              We promise not to spam you.
            </p>
          <Form
            className="mt-4"
            onSubmit={handleSubmit}
          >
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup.Append>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={email.trim() === ''}
                >Subscribe</Button>
              </InputGroup.Append>
            </InputGroup>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                className="subscribe-box-agreement"
                type="checkbox"
                checked={agreement}
                label="I agree to my email address being stored and used to receive monthly newsletter."
                onChange={(e) => setAgreement(!agreement)}
              />
            </Form.Group>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
