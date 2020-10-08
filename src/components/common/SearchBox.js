import React from 'react';

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

export default SearchBox;
