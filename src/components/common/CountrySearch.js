import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AutoSuggest from 'react-autosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import countriesJson from '../../data/countries.json';

const RENDER_SUGGESTIONS_BY_DEFAULT = true;

const getSuggestions = (value) => {
  return countriesJson.filter(country =>
    country.name.toLowerCase().includes(value.trim().toLowerCase())
  );
}

const shouldRenderSuggestions = () => RENDER_SUGGESTIONS_BY_DEFAULT;

const renderInputComponent = inputProps => (
  <div className="search-input-wrapper ">
    <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
    <input {...inputProps} aria-label="Search country" />
  </div>
);

const CountrySearch = ({
  country,
  setCountry
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState(country ?? '');

  return (
    <AutoSuggest
      suggestions={suggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({ value: sValue }) => {
        setSuggestions(getSuggestions(sValue));
      }}
      onSuggestionSelected={(_, { suggestionValue }) => {
        setCountry(suggestionValue);
      }}
      shouldRenderSuggestions={shouldRenderSuggestions}
      getSuggestionValue={suggestion => suggestion.name}
      renderSuggestion={suggestion => <span>{suggestion.name}</span>}
      inputProps={{
        placeholder: "Country",
        value,
        onChange: (_, { newValue }) => {
          setValue(newValue);
        }
      }}
      renderInputComponent={renderInputComponent}
      highlightFirstSuggestion
    />
    );
};

CountrySearch.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired
};

export default CountrySearch;
