import React from 'react';
import PropTypes from 'prop-types';

import OffersList from '../offers-list/offers-list';
import Types from '../../types';
import {settingsForCard} from '../../consts';
import {getCitiesFromOffers, getFavoriteOffersByCity} from '../../selectors';

const FavoritesList = (props) => {
  const {offers} = props;

  const cities = getCitiesFromOffers(offers);

  return (
    <ul className="favorites__list">
      {cities.map((city, id) => (
        <li key={id} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <OffersList offers={getFavoriteOffersByCity(offers, city)} cardSet={settingsForCard.FAVORITES}/>
          </div>
        </li>
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default FavoritesList;
