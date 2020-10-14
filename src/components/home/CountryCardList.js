import React from 'react';
import PropTypes from 'prop-types';
import { BasicImage, BasicLink } from '../common';

const CountryListItem = ({ country }) => (
    <>
      <BasicImage url={country.image} alt={country.name} />
      <BasicLink
        url={`/search?country=${country.name}`}
        text={country.name}
        className="country-list-link"
      />
    </>
);

const List = ({listClass, data, renderItem}) => (
  <ul className={listClass}>
    {data.map((d, i) => (
      <li key={i} className={`${listClass}-item`}>{renderItem(d)}</li>
    ))}
  </ul>
);

const CountryList = ({ countries }) => (
  <List
    listClass={'country-list'}
    data={countries}
    renderItem={(item) => (
      <CountryListItem country={item}/>
    )}
  />
);

const CountryListHeader = ({ text }) => <h5>{text}</h5>;

const CountryCardList = ({ title, countries }) => (
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
