import React from 'react';
import PropTypes from 'prop-types';

import Types from '../../types';
import {getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate} from '../../selectors';

const SortForm = (props) => {
  const {offersFilteredByCity, onSortClick, offers} = props;

  const offersFilteredByPriceInc = getFilteredOffersByPriceIncrease(offers);
  const offersFilteredByPriceRed = getFilteredOffersByPriceReduce(offers);
  const offersFilteredByRate = getFilteredOffersByRate(offers);

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
            onSortClick(offersFilteredByCity);
          }}
        >
            Popular
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(offersFilteredByPriceInc);
          }}
        >
            Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(offersFilteredByPriceRed);
          }}
        >
            Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(offersFilteredByRate);
          }}
        >
            Top rated first
        </li>
      </ul>
    </form>
  );
};

SortForm.propTypes = {
  offersFilteredByCity: PropTypes.arrayOf(Types.OFFER),
  offers: PropTypes.arrayOf(Types.OFFER),
  onSortClick: PropTypes.func.isRequired
};

export default SortForm;
