import React from 'react';
import Types from '../../types';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';
import {screenForCardClass, typeOfCards, sizesForImages} from '../../consts';

const FavoritesList = (props) => {
  const {offers, cities} = props;

  const screen = screenForCardClass.FAVORITES;
  const card = typeOfCards.Card;
  const image = sizesForImages.SMALL;

  const getFavoriteOffers = (city) => {
    return offers.filter((offer) => {
      return offer.city === city && offer.status === `favorite`;
    });
  };

  console.log(offers);
  console.log(cities);

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
            <OffersList offers={getFavoriteOffers(city)} screen={screen} card={card} image={image}/>
          </div>
        </li>
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  cities: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default FavoritesList;
