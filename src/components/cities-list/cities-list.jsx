import React from 'react';
import PropTypes from 'prop-types';

import {typeCity} from '../../types';
import {cities} from '../../const';

const CitiesList = (props) => {
  const {activeCity, setActiveCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => {
        return (
          <li
            className="locations__item" key={city + i}
            onClick={() => {
              setActiveCity(city);
            }}
          >
            <a
              className={`locations__item-link tabs__item` + (city.name === activeCity.name ? ` tabs__item--active` : ``)}
              href="#"
            >
              <span>{city.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

CitiesList.propTypes = {
  activeCity: typeCity,
  setActiveCity: PropTypes.func.isRequired
};

export default CitiesList;
