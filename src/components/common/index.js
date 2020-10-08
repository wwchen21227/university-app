import React from 'react';
import { Button, InputGroup, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry, faSearch } from '@fortawesome/free-solid-svg-icons';

export const BasicImage = ({ url, alt }) => <img src={url} alt={alt} />;

const getLinkNewTabAttrs = (openNewTab) => {
  return openNewTab ? {
    target: '_blank',
    rel: "noreferrer"
  } : {};
};

export const BasicLink = ( { className, url, text, openNewTab } ) => (
  <a
    className={className}
    href={url}
    {...getLinkNewTabAttrs(openNewTab)}
  >{text}
  </a>
);

export const UniversityNameSearch = ({
  searchTerm,
  setSearchTerm,
  handleSearchClick,
  autoSearch = false
}) => (
  <Form onSubmit={handleSearchClick}>
    <InputGroup className="mb-3">
      <div className="search-input-wrapper">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <FormControl
          type="text"
          className="form-control"
          placeholder="Search university..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {!autoSearch && (
        <InputGroup.Append>
          <Button type="submit" variant="primary">Search</Button>
        </InputGroup.Append>
      )}
    </InputGroup>
  </Form>
);

export const NoResult = ({
  message = 'No result found.',
  height = 'auto',
  showIcon = true
}) => (
  <div className="no-result no-result--w-bg" style={{height}}>
    <div className="no-result-body">
      {showIcon && <FontAwesomeIcon className="icon" icon={faSadCry} />}
      <p className="no-result-message">
        {message}
      </p>
    </div>
  </div>
);

