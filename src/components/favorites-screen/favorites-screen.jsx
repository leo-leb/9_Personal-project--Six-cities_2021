import React from 'react';
import OffersList from '../offers-list/offers-list';
import {Link} from 'react-router-dom';
import {Routes, screenForCardClass, typeOfCards, sizesForImages} from '../../consts';
import Types from '../../types';
import PropTypes from 'prop-types';

const FavoritesScreen = (props) => {
  const {offers} = props;
  const cities = [`Amsterdam`, `Cologne`];

  const screen = screenForCardClass.FAVORITES;
  const card = typeOfCards.Card;
  const image = sizesForImages.SMALL;

  const getFavoriteOffersForCity = (city) => {
    return offers.filter((offer) => {
      return offer.city === city && offer.status === `favorite`;
    });
  };

  return (
    <div className="page">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={Routes.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
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
                    <OffersList offers={getFavoriteOffersForCity(city)} screen={screen} card={card} image={image}/>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default FavoritesScreen;
