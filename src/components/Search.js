import React, { useState, useEffect } from 'react';
import universitiesJson from '../data/universities.json';

import './search.scss';

const Title = ({ text }) => <h5 className="card-title">{text}</h5>;

const SubTitle = ({ text }) => <div className="sub-title">{text}</div>;

const CountryInfo = ({ countryName, countryCode, province }) => (
  <div>
    <span>{countryName}</span> &middot;
    <span>{countryCode}</span> &middot;
    <span>{province}</span>
  </div>
);

const WebsiteLinks = ({ links }) => (
  <div className="website-links-wrapper">
    <div>Websites</div>
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
      <SubTitle text={getFirstDomain(university.domains)} />
      <CountryInfo
        countryName={university.country}
        countryCode={university.alpha_two_code}
        province={university['state-province']}
      />
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



const Search = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    setUniversities(universitiesJson);
  }, []);

  const top20 = universities.slice(0, 20);

  return (

    <div className="main-container">

      <div>
        <input type="text" clasName="form-control" placeholder="Search university..." aria-label="Username" aria-describedby="basic-addon1"/>
        <input type="text" clasName="form-control" placeholder="Search Country..." aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div className="uni-list-container mt-3">
        <UniversityList universities={top20} />
       </div>
    </div>
  );
};

export default Search;

