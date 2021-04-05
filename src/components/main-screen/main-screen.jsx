import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import CitiesList from '../cities-list/cities-list';
import MainContent from '../main-content/main-content';
import MainContentEmpty from '../main-content-empty/main-content-empty';
import {AppRoute, DefaultState, AuthorizationStatus} from '../../const';
import {getOffersByCity} from '../../selectors';

const MainScreen = () => {
  const {offers} = useSelector((state) => state.MAIN);
  const {authStatus} = useSelector((state) => state.ROOT);

  const [city, setCity] = useState(DefaultState.MAIN);
  const offersFilteredByCity = getOffersByCity(offers, city);

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
                  <Link className="header__nav-link header__nav-link--profile" to={authStatus === AuthorizationStatus.AUTH ? AppRoute.FAVORITES : AppRoute.SIGNIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {authStatus === AuthorizationStatus.AUTH ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span> : <span className="header__login">Sign in</span>}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index` + (offersFilteredByCity.length === 0 ? ` page__main--index-empty` : ``)}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={city} setActiveCity={setCity}/>
          </section>
        </div>
        <div className="cities">
          {offersFilteredByCity.length !== 0 ? <MainContent city={city} offers={offersFilteredByCity}/> : <MainContentEmpty city={city}/>}
        </div>
      </main>

    </div>
  );
};

export default MainScreen;
