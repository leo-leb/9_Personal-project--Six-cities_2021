import React from 'react';
import Types from '../../types';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';
import {screenForCardClass, typeOfCards, sizesForImages} from '../../consts';

const FavoritesList = (props) => {
  const {offers} = props;

  const screen = screenForCardClass.FAVORITES;
  const card = typeOfCards.Card;
  const image = sizesForImages.SMALL;

  const getCitiesFromOffers = (offersList) => {
    let citiesList = [];
    offersList
      .filter((offer) => {
        return offer.is_favorite;
      })
      .forEach((offer) => {
        if (citiesList.includes(offer.city.name) !== true) {
          citiesList.push(offer.city.name);
        }
      });
    return citiesList;
  };

  const getFavoriteOffers = (city) => {
    return offers.filter((offer) => {
      return offer.city.name === city && offer.is_favorite;
    });
  };

  return (
    <ul className="favorites__list">
      {getCitiesFromOffers(offers).map((city, id) => (
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
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default FavoritesList;
