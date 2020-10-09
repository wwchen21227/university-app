import React from 'react';
import PropTypes from 'prop-types';

const SearchBoxHeader = ({ text }) =>
  <h3 className="search-box-header">{text}</h3>;

const SearchBox = ({
  title,
  children
}) => (
  <div className="search-box-wrapper">
    <SearchBoxHeader text={title} />
    {children}
  </div>
);

SearchBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SearchBox;
