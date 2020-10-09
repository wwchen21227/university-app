import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const UniversitySearch = ({
  searchTerm,
  setSearchTerm,
  handleSearchClick,
  autoSearch
}) => (
  <Form onSubmit={handleSearchClick}>
    <InputGroup className="mb-3">
      <div className="search-input-wrapper">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <FormControl
          type="text"
          aria-label="Search university"
          className="form-control"
          placeholder="Search university..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {!autoSearch && (
        <InputGroup.Append>
          <Button type="submit" variant="primary">
            Search
          </Button>
        </InputGroup.Append>
      )}
    </InputGroup>
  </Form>
);

UniversitySearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func,
  autoSearch: PropTypes.bool
};

UniversitySearch.defaultProps = {
  handleSearchClick: () => {},
  autoSearch: false
};

export default UniversitySearch;
