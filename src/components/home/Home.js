import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import popularJson from '../../data/popularCountries.json';
import TopCountryList from './CountryCardList';
import SearchBox from '../common/SearchBox';
import { UniversitySearch } from '../common';

import './home.scss';

const Home = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = (e) => {
    e.preventDefault();
    history.push(`/search?name=${searchTerm}`);
  };

  return (
    <div className="main-container home-page-container">
      <div className="mt-4 mb-5">
        <SearchBox title="Find your favourite University">
          <UniversitySearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearchClick={handleSearchClick}
          />
        </SearchBox>
      </div>

      <TopCountryList
        title="Top Countries"
        countries={popularJson}
      />
    </div>
  );
};

export default Home;
