import React, { useState, useEffect } from 'react';
import universitiesJson from '../data/universities.json';
import popularJson from '../data/popularCountries.json';
import { Button, InputGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import './home.scss';

const Home = () => {
  const history = useHistory();
  const [universities, setUniversity] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setUniversity(universitiesJson);
  }, []);

 // console.log(universitiesJson);
  const handleSearchClick = () => {
    history.push(`/search?name=${searchTerm}`);
  };

  const top10 = universities.slice(0, 10);

  return (
    <div className="main-container">
      <div  className="mb-5 mt-5">
        <div>
          Find your favourite University
        </div>
        <InputGroup className="mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Search university..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={handleSearchClick}>search</Button>
          </InputGroup.Append>
        </InputGroup>
        <div>
        </div>
      </div>
      <h5>Top Countries</h5>
      <ul className="country-list">
        {
          popularJson.map(uni => (
            <li className="country-list-item">
              <img src={uni.image}/>
              <a className="country-list-link" href={`/search?country=${uni.name}`}>{uni.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
