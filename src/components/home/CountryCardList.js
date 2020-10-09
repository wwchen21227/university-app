import React from 'react';
import PropTypes from 'prop-types';
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
      countries.map((country, index) => (
        <CountryListItem
          key={index}
          imageUrl={country.image}
          name={country.name}
        />
      ))
    }
  </ul>
);

const CountryListHeader = ( { text } ) => <h5>{text}</h5>;

const CountryCardList = ({
  title,
  countries
}) => (
  <div className="country-list-wrapper">
    <CountryListHeader text={title} />
    <CountryList countries={countries} />
  </div>
);

CountryCardList.propTypes = {
  title: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired
};

CountryCardList.defaultProps = {
  title: 'Top Countries'
};

export default CountryCardList;
