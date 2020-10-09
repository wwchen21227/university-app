import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { getFirstItemOrDefault } from 'utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';
import { BasicLink, NoResult } from '../common';

const InfoDetails = ({text, icon}) => (
  <div>
    <FontAwesomeIcon className="icon" icon={icon} />
    <span>{text}</span>
  </div>
);

const InfoWrapper = ({ children }) => <div className="d-flex card-info-wrapper">{children}</div>;

const WebsiteLinkItem = ({link, text}) => (
  <li>
    <FontAwesomeIcon className="icon" icon={faLink} />
    <BasicLink
      className="card-link"
      url={link}
      text={text}
      target="_blank"
    />
  </li>
);

const WebsiteLinks = ({ links, firstLinkOnly }) => (
  <ul>
    {
      links.slice(0, (firstLinkOnly ? 1 : links.length))
      .map((link, index) => <WebsiteLinkItem key={index} link={link} text={link} />)
    }
  </ul>
);

const UniversityCard = ({ university }) => (
  <Card>
    <Card.Body>
      <Card.Title>{university.name}</Card.Title>

      <InfoWrapper>
        <InfoDetails text={getFirstItemOrDefault(university.domains)} icon={faGlobe} />
        <InfoDetails text={university.country} icon={faMapMarkerAlt} />
      </InfoWrapper>

      <WebsiteLinks
        links={university.web_pages}
        firstLinkOnly
      />
    </Card.Body>
  </Card>
);

const ResultListItem = ({ result }) => (
  <li className="result-list-item">
    <UniversityCard university={result} />
  </li>
);

const ResultList = ({ results }) => (
  <ul className="result-list">
    {results.map((result, index) =>
      <ResultListItem key={index} result={result} />
    )}
  </ul>
);

const getSearchTermHeader = (name, country) => {
  let header = 'All around the world';
  if (name !== '' && country !== '') {
    header = `${name} in ${country}`;
  } else if (name === '' && country !== '') {
    header = `All universities in ${country}`;
  } else if (name !== '' && country === '') {
    header = `${name} around the world`;
  }
  return header;
};

const ResultHeader = ({ headerText, resultText }) => (
  <div className="search-result-header">
    <div>{headerText}</div>
    <small>{resultText}</small>
  </div>
);

const SearchResult = ({
  searchTerm,
  country,
  results,
  currentPage,
  setCurrentPage,
  maxPages,
  totalResults
}) => (
  <>
    <ResultHeader
      headerText={getSearchTermHeader(searchTerm, country)}
      resultText={`${totalResults} results`}
    />
    {totalResults === 0 ?
      (<NoResult />)
      :
      (
        <>
          <ResultList results={results} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPages={maxPages}
          />
        </>
      )}
  </>
  );

SearchResult.propTypes = {
  searchTerm: PropTypes.string,
  country: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  maxPages: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired
};

SearchResult.defaultProps = {
  searchTerm: '',
  country: ''
};

export default SearchResult;
