import React, { useState, useEffect } from 'react';
import { fetchUniversityList } from './api';
import universitiesJson from '../data/universities.json';
import popularJson from '../data/popularCountries.json';
import uniqby from 'lodash.uniqby';

import './home.scss';

const Home = () => {
  const [universities, setUniversity] = useState([]);

  useEffect(() => {

    // const fetchData = async () => {
    //   const data = await fetchUniversityList();
    //   setUniversity(data);
    // };

    //fetchData();

    setUniversity(universitiesJson);

  }, []);

 // console.log(universitiesJson);

  const top10 = universities.slice(0, 10);

  const countries = uniqby(universitiesJson, 'country').map(item => {
    return {
      name: item.country,
      code: item.alpha_two_code
    }
  });
  console.log(countries)
  return (
    <div className="main-container">
      <div  className="mb-5 mt-5">
        <div>
          Find your favourite University
        </div>
        <div>
          <input type="text" class="form-control" placeholder="Search university..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
      <h5>Top Countries</h5>
      <ul className="country-list">
        {
          popularJson.map(uni => (
            <li className="country-list-item">
              <img src={uni.image}/>
              <a className="country-list-link" href={`/search?country=${uni.code}`}>{uni.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
