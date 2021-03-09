import React from 'react';
import Types from '../../types';
import PropTypes from 'prop-types';

const SortForm = (props) => {
  const {activeCity, onCityChange, onSortPriceInc, onSortPriceRed, onSortRate} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onCityChange(activeCity);
          }}
        >
            Popular
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortPriceInc(activeCity);
          }}
        >
            Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortPriceRed(activeCity);
          }}
        >
            Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortRate(activeCity);
          }}
        >
            Top rated first
        </li>
      </ul>
    </form>
  );
};

SortForm.propTypes = {
  activeCity: Types.CITY,
  onCityChange: PropTypes.func.isRequired,
  onSortPriceInc: PropTypes.func.isRequired,
  onSortPriceRed: PropTypes.func.isRequired,
  onSortRate: PropTypes.func.isRequired
};

export default SortForm;
