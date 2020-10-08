import React from 'react';
import { BasicImage, BasicLink } from '../common';

const CountryListItem = ({ imageUrl, name }) => (
  <li className="country-list-item">
    <BasicImage url={imageUrl} alt={name} />
    <BasicLink
      url={`/search?country=${name}`}
      text={name}
      className="country-list-link"
    />
  </li>
);

const CountryList = ({ countries }) => (
  <ul className="country-list">
    {
      countries.map(country => (
        <CountryListItem
          imageUrl={country.image}
          name={country.name}
        />
      )
      )
    }
  </ul>
);

const CountryListHeader = ( { text } ) => <h5>{text}</h5>;

const CountryCardList = ({
  title = 'Top Countries',
  countries
}) => (
  <>
    <CountryListHeader text={title} />
    <CountryList countries={countries} />
  </>
);

export default CountryCardList;
