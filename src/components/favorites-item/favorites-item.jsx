import React from 'react';
import PropTypes from 'prop-types';

import OffersList from '../offers-list/offers-list';
import Types from '../../types';
import {settingsForCard} from '../../consts';
import {getFavoriteOffersByCity} from '../../selectors';

const FavoritesItem = (props) => {
  const {offers, city} = props;

  const favoriteOffersForCity = getFavoriteOffersByCity(offers, city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList offers={favoriteOffersForCity} cardSet={settingsForCard.FAVORITES}/>
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  city: PropTypes.string.isRequired
};

export default FavoritesItem;
