import React from 'react';
import PropTypes from 'prop-types';

import Types from '../../types';
import {getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate} from '../../selectors';

const SortForm = (props) => {
  const {onSortClick, offers} = props;

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
            onSortClick(offers);
          }}
        >
            Popular
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(getFilteredOffersByPriceIncrease(offers));
          }}
        >
            Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(getFilteredOffersByPriceReduce(offers));
          }}
        >
            Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(getFilteredOffersByRate(offers));
          }}
        >
            Top rated first
        </li>
      </ul>
    </form>
  );
};

SortForm.propTypes = {
  // offersFilteredByCity: PropTypes.arrayOf(Types.OFFER),
  offers: PropTypes.arrayOf(Types.OFFER),
  onSortClick: PropTypes.func.isRequired
};

export default SortForm;
