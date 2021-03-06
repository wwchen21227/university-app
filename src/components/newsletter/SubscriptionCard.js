import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, FormControl, InputGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SubscriptionCard = ({
  email,
  setEmail,
  agreement,
  setAgreement,
  handleSubmit
}) => (
  <Card>
    <Card.Body>
      <FontAwesomeIcon className="icon" icon={faPaperPlane} />
      <Card.Title>Let&apos;s keep in touch</Card.Title>
      <Card.Text className="subscribe-box-message">
        Subscribe to keep up with fresh University news and exciting updates.{' '}
        <br />
        We promise not to spam you.
      </Card.Text>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            type="textbox"
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
            >
              Subscribe
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            className="subscribe-box-agreement"
            type="checkbox"
            checked={agreement}
            label="I agree to my email address being stored and used to receive monthly newsletter."
            onChange={() => setAgreement(!agreement)}
          />
        </Form.Group>
      </Form>
    </Card.Body>
  </Card>
);

SubscriptionCard.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  agreement: PropTypes.bool,
  setAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SubscriptionCard.defaultProps = {
  email: '',
  agreement: false
};

export default SubscriptionCard;
