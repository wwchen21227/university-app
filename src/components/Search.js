import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import AutoSuggest from 'react-autosuggest';
import universitiesJson from '../data/universities.json';
import countriesJson from '../data/countries.json';
import { searchUniversity } from './api';

import './search.scss';

function getSuggestions(value) {
  return countriesJson.filter(country =>
    country.name.toLowerCase().includes(value.trim().toLowerCase())
  );
}
function shouldRenderSuggestions() {
  return true;
}

const Title = ({ text }) => <h5 className="card-title">{text}</h5>;

const SubTitle = ({ text }) => <div className="sub-title">{text}</div>;

const CountryInfo = ({ countryName, countryCode, province }) => (
  <div className="country-info-wrapper">
    <span>{countryName}</span>
    {/* <span>{countryCode}</span> &middot;
    <span>{province}</span> */}
  </div>
);

const WebsiteLinks = ({ links }) => (
  <div className="website-links-wrapper">
    {/* <div>Websites</div> */}
    <ul>
      {
        links.map((link) => (
          <li>
            <a href={link} className="card-link" target="_blank" rel="noreferrer">{link}</a>
          </li>
        ))
      }
    </ul>
  </div>
);

const getFirstDomain = (domains) => {
  return domains[0] ?? '';
}

const UniversityCard = ({ university }) => (
  <div className="card">
    <div className="card-body">
      <Title text={university.name} />

      <CountryInfo
        countryName={university.country}
        countryCode={university.alpha_two_code}
        province={university['state-province']}
      />
      <SubTitle text={getFirstDomain(university.domains)} />
      <WebsiteLinks
        links={university.web_pages}
      />
    </div>
  </div>
);

const UniversityList = ({ universities }) => (
  <ul className="uni-list">
    {universities.map((uni) => (
      <li className="uni-list-item">
        <UniversityCard university={uni} />
      </li>
    ))}
  </ul>
);

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const getSearchTermHeader = (name, country) => {
  let header = 'All around the world';
  if(name !== '' && country !== '') {
    header = `${name} in ${country}`;
  }else if(name === '' && country !== '') {
    header = `All universities in ${country}`;
  }else if(name !== '' && country === '') {
    header = `${name} around the world`;
  }
  return header;
};

const SEARCH_DELAY_TIME_IN_MS = 350;
const RESULT_LIMIT = 15;

const Search = () => {
  const query = useQuery();
  let timerId = null;

  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [originUniversities, setOriginUniversities] = useState([]);
  const [universities, setUniversities] = useState([]);

  const [searchTerm, setSearchTerm] = useState(query.get('name') ?? '');
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState(query.get('country') ?? '');
  const [country, setCountry] = useState(query.get('country') ?? '');
  const [loading, setLoading] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  const fetchData = async (name, countryName) => {
    setLoading(true);

    let data = universitiesJson;

    if(name !== '' || countryName !== ''){
      data = await searchUniversity(name, countryName);
    }
    setMaxPages(Math.ceil(data.length / RESULT_LIMIT));

    setOriginUniversities(data);
    setUniversities(data);

    setLoading(false);
  };

  useEffect(() => {
    timerId = setTimeout(() => {
      fetchData(searchTerm, country);
    }, firstRender ? 0 : SEARCH_DELAY_TIME_IN_MS);

    return () => clearTimeout(timerId);
  }, [searchTerm, country]);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  useEffect(() => {
    const startAt = (currentPage * RESULT_LIMIT);
    const endAt = startAt + RESULT_LIMIT;
    setUniversities(originUniversities.slice(startAt, endAt));
    window.scrollTo(0, 0);
  }, [currentPage]);

  const top20 = universities.slice(0, RESULT_LIMIT);
  const searchTermHeader = getSearchTermHeader(searchTerm, country);

  return (

    <div className="main-container">
      <div className="search-container mt-4 pl-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search university..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => {
              setSuggestions(getSuggestions(value));
            }}
          onSuggestionSelected={(event, {suggestionValue}) => {
                setCountry(suggestionValue);
            }}
          shouldRenderSuggestions={shouldRenderSuggestions}
          getSuggestionValue={suggestion => suggestion.name}
          renderSuggestion={suggestion => <span>{suggestion.name}</span>}
          inputProps={{
              placeholder: "Country name",
              value,
              onChange: (_, { newValue, method }) => {
                setValue(newValue)
              }
            }}
          highlightFirstSuggestion
        />
      </div>
      { loading ? (
        <span>Loading...</span>
      )
      : (
        <>
        <div className="mt-3 search-result-header pl-1">
          <div>{searchTermHeader}</div>
          <small>{universities.length} results</small>
        </div>
        <div className="uni-list-container">
          <UniversityList universities={top20} />
          <div>
            <a
              href="#"
              disabled={currentPage <= 1}
              onClick={(e) => {
                e.preventDefault();
                if(currentPage > 1)
                  setCurrentPage(currentPage - 1);
              }}
            >Previous Page
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if((currentPage + 1) < maxPages)
                  setCurrentPage(currentPage + 1);
              }}
            >Next Page
            </a>
          </div>
        </div>
        </>
        )}

    </div>
  );
};

export default Search;

