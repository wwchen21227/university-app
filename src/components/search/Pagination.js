import React from 'react';
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

  const disabledPrevButton = currentPage <= 1;
  const disabledNextButton = currentPage >= maxPages;

  return (
    <div className="paging-container">
      <PagingButton
        disabled={disabledPrevButton}
        handleClick={handlePreviousClick}
      >
        <FontAwesomeIcon className="icon" icon={faAngleLeft} />
        Previous Page
      </PagingButton>
      <PagingButton
        disabled={disabledNextButton}
        handleClick={handleNextClick}
      >
        Next Page
        <FontAwesomeIcon className="icon" icon={faAngleRight} />
      </PagingButton>
    </div>
  );
};

export default Pagination;
