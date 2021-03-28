import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CitiesList from '../cities-list/cities-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import SortForm from '../sort-form/sort-form';
import Types from '../../types';
import {Routes, settingsForCard, defaultStates, AuthorizationStatus} from '../../consts';
import {getFilteredOffersByCity} from '../../selectors';

const MainScreen = (props) => {
  const {allOffers, authStatus} = props;

  const [city, setCity] = useState(defaultStates.MAIN);
  let offersFilteredByCity = getFilteredOffersByCity(allOffers, city);
  const [filterOffers, setFilteredOffers] = useState([]);

  useEffect(() => {
    setFilteredOffers(offersFilteredByCity);
  }, [city]);

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
                  <Link className="header__nav-link header__nav-link--profile" to={authStatus === AuthorizationStatus.AUTH ? Routes.FAVORITES : Routes.SIGNIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {authStatus === AuthorizationStatus.AUTH ?
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span> :
                      <span className="header__login">Sign in</span>
                    }
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
            <CitiesList activeCity={city} setActiveCity={setCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filterOffers.length} places to stay in {city.name}</b>
              <SortForm offers={offersFilteredByCity} onSortClick={setFilteredOffers}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={filterOffers} cardSet={settingsForCard.MAIN}/>
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

const mapStateToProps = ({MAIN, ROOT}) => ({
  allOffers: MAIN.offers,
  authStatus: ROOT.authStatus
});

MainScreen.propTypes = {
  allOffers: PropTypes.arrayOf(Types.OFFER),
  authStatus: PropTypes.string.isRequired
};

export {MainScreen};
export default connect(mapStateToProps, null)(MainScreen);
