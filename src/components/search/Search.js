import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBox from '../common/SearchBox';
import SearchResult from './SearchResult';
import { UniversitySearch, CountrySearch, WithLoading } from '../common';
import universitiesJson from '../../data/universities.json';
import { searchUniversity } from '../api';

import './search.scss';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SEARCH_DELAY_TIME_IN_MS = 350;
const RESULT_LIMIT = 15;
const DEFAULT_PAGE = 1;

const Search = () => {
  const query = useQuery();
  let timerId = null;

  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const [originUniversities, setOriginUniversities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState(query.get('name') ?? '');
  const [country, setCountry] = useState(query.get('country') ?? '');
  const [loading, setLoading] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  const fetchData = async (name, countryName) => {
    setLoading(true);

    let data = universitiesJson;

    if (name !== '' || countryName !== '') {
      data = await searchUniversity(name, countryName);
    }

    setMaxPages(Math.ceil(data.length / RESULT_LIMIT));

    setOriginUniversities(data);
    setUniversities(data);
    setCurrentPage(DEFAULT_PAGE);

    setLoading(false);
  };

  useEffect(() => {
    timerId = setTimeout(
      () => {
        fetchData(searchTerm, country);
      },
      firstRender ? 0 : SEARCH_DELAY_TIME_IN_MS
    );

    return () => clearTimeout(timerId);
  }, [searchTerm, country]);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  useEffect(() => {
    const startAt = firstRender ? 0 : (currentPage - 1) * RESULT_LIMIT;
    const endAt = firstRender ? RESULT_LIMIT : startAt + RESULT_LIMIT;

    setUniversities(originUniversities.slice(startAt, endAt));

    window.scrollTo(0, 0);
  }, [currentPage]);

  const results = universities.slice(0, RESULT_LIMIT);

  return (
    <div className="main-container search-page-container">
      <SearchBox title="Search your favourite University">
        <UniversitySearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          autoSearch
        />
        <CountrySearch country={country} setCountry={setCountry} />
      </SearchBox>

      <WithLoading isLoading={loading}>
        <SearchResult
          searchTerm={searchTerm}
          country={country}
          results={results}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPages={maxPages}
          totalResults={originUniversities.length}
        />
      </WithLoading>
    </div>
  );
};

export default Search;
