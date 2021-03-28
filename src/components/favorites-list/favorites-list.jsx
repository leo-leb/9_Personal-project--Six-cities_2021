import React from 'react';
import PropTypes from 'prop-types';

import FavoritesItem from '../favorites-item/favorites-item';
import Types from '../../types';
import {getCitiesFromOffers} from '../../selectors';

const FavoritesList = (props) => {
  const {offers} = props;

  const cities = getCitiesFromOffers(offers);

  return (
    <ul className="favorites__list">
      {cities.map((city, id) => <FavoritesItem offers={offers} city={city} key={id}/>)}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default FavoritesList;
