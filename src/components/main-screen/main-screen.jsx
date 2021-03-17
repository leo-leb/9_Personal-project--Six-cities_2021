import React, {useEffect, useState} from 'react';
import OffersList from '../offers-list/offers-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Routes, cities, screenForCardClass, typeOfCards, sizesForImages} from '../../consts';
import {getFilteredOffersByCity} from '../../selectors';
import Types from '../../types';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import SortForm from '../sort-form/sort-form';
import PropTypes from 'prop-types';

import {fetchOffersList} from "../../store/api-actions";

const MainScreen = (props) => {
  const {offers, isDataLoaded, onLoadData} = props;

  const [city, setCity] = useState(cities[0]);

  const screen = screenForCardClass.MAIN;
  const card = typeOfCards.PlaceCard;
  const image = sizesForImages.BIG;
  const offersFilteredByCity = getFilteredOffersByCity(offers, city);

  const [filterOffers, setFilteredOffers] = useState(offersFilteredByCity);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={Routes.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>


      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={city} setActiveCity={setCity} onCityChange={setFilteredOffers} offers={filterOffers}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> places to stay in {city.name}</b>
              <SortForm offers={filterOffers} offersFilteredByCity={offersFilteredByCity} onSortClick={setFilteredOffers}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={filterOffers} screen={screen} card={card} image={image}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={city}
                  points={filterOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.main.offers,
  isDataLoaded: state.main.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  }
});

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  offersSorted: PropTypes.arrayOf(Types.OFFER),
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
