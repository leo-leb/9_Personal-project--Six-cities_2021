import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../consts';
import Types from '../../types';

const FavoritesScreen = (props) => {
  const {offers} = props;
  const cities = [`Amsterdam`, `Cologne`];

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
                    {offers.map((offer, i) => (
                      offer.city === city && offer.status === `favorite` ? <article key={i} className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img className="place-card__image" src={offer.image} width="150" height="110" alt="Place image" />
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: offer.rate}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <a href="#">{offer.name}</a>
                          </h2>
                          <p className="place-card__type">{offer.type}</p>
                        </div>
                      </article> : null
                    ))}
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
  offers: Types.OFFERS
};

export default FavoritesScreen;
