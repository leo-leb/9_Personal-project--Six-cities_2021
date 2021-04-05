import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import FavoritesContent from '../favorites-content/favorites-content';
import FavoritesContentEmpty from '../favorites-content-empty/favorites-content-empty';
import {AppRoute} from '../../const';

const FavoritesScreen = () => {
  const {offers} = useSelector((state) => state.FAVORITE);

  return (
    <div className="page">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
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

      {offers.length !== 0 ?
        <FavoritesContent offers={offers}/> :
        <FavoritesContentEmpty/>
      }

    </div>
  );
};

export default FavoritesScreen;
