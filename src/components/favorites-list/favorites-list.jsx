import React from 'react';
import PropTypes from 'prop-types';

import FavoritesItem from '../favorites-item/favorites-item';
import {typeOffer} from '../../types';
import {getCitiesFromOffers} from '../../selectors';

const FavoritesList = (props) => {
  const {offers} = props;

  const cities = getCitiesFromOffers(offers);

  return (
    <ul className="favorites__list">
      {cities.map((city, i) => <FavoritesItem offers={offers} city={city} key={city + i}/>)}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(typeOffer)
};

export default FavoritesList;
