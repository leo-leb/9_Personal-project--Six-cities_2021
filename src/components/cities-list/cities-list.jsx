import React from 'react';
import PropTypes from 'prop-types';
import {cities} from '../../consts';
import Types from '../../types';
import {connect} from 'react-redux';

const CitiesList = (props) => {
  const {activeCity, setActiveCity, onCityChange, offers} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => {
        return (
          <li
            className="locations__item" key={city + i}
            onClick={() => {
              setActiveCity(city);
              onCityChange(offers, city);
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
  setActiveCity: PropTypes.func.isRequired,
  activeCity: Types.CITY,
  onCityChange: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default CitiesList;
