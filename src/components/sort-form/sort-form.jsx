import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Types from '../../types';
import {getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate} from '../../selectors';

const SortForm = (props) => {
  const {onSortClick, offers} = props;

  const [popup, setPopup] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => {
          setPopup(!popup);
        }}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom` + (popup ? ` places__options--opened` : ``)}
      >
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(offers);
            setPopup(!popup);
          }}
        >
            Popular
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(getFilteredOffersByPriceIncrease(offers));
            setPopup(!popup);
          }}
        >
            Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(getFilteredOffersByPriceReduce(offers));
            setPopup(!popup);
          }}
        >
            Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onSortClick(getFilteredOffersByRate(offers));
            setPopup(!popup);
          }}
        >
            Top rated first
        </li>
      </ul>
    </form>
  );
};

SortForm.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  onSortClick: PropTypes.func.isRequired
};

export default SortForm;
