import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PagingButton = ({
  children,
  disabled,
  handleClick
}) => (
  <Button
    variant="link"
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </Button>
);

const Pagination = ({
  currentPage,
  setCurrentPage,
  maxPages
}) => {
  const handlePreviousClick = (e) => {
    e.preventDefault();
    if (currentPage > 1)
      setCurrentPage(currentPage - 1);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if ((currentPage) < maxPages)
      setCurrentPage(currentPage + 1);
  };

  const disabledPrevBtn = currentPage <= 1;
  const disabledNextBtn = currentPage >= maxPages;

  return (
    <div className="paging-container">
      <PagingButton
        disabled={disabledPrevBtn}
        handleClick={handlePreviousClick}
      >
        <FontAwesomeIcon className="icon" icon={faAngleLeft} />
        Previous Page
      </PagingButton>
      <PagingButton
        disabled={disabledNextBtn}
        handleClick={handleNextClick}
      >
        Next Page
        <FontAwesomeIcon className="icon" icon={faAngleRight} />
      </PagingButton>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  maxPages: PropTypes.number.isRequired
};

export default Pagination;
