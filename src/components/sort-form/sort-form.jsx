import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {typeOffer, typeCity} from '../../types';
import {filters, DefaultState} from '../../const';

const SortForm = (props) => {
  const {onSortClick, offers, city} = props;

  const initialFilter = DefaultState.SORT_FORM;

  const [popup, setPopup] = useState(false);
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [city]);

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
        {activeFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom` + (popup ? ` places__options--opened` : ``)}
      >
        {filters.map((filter, i) => (
          <li
            className="places__option"
            tabIndex="0"
            key={filter + i}
            onClick={() => {
              onSortClick(filter.action(offers));
              setPopup(!popup);
              setActiveFilter(filter.name);
            }}
          >
            {filter.name}
          </li>
        ))}
      </ul>
    </form>
  );
};

SortForm.propTypes = {
  offers: PropTypes.arrayOf(typeOffer),
  onSortClick: PropTypes.func.isRequired,
  city: typeCity
};

export default SortForm;
