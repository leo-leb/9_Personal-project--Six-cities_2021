import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../consts';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FavoritesList from '../favorites-list/favorites-list';
import LoadingScreen from '../loading-screen/loading-screen';
import Types from '../../types';
import {fetchFavoriteOffersList} from "../../store/api-actions";

const FavoritesScreen = (props) => {
  const {favorites, isDataLoaded, onLoadData} = props;

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
            <FavoritesList offers={favorites}/>
          </section>
        </div>
      </main>

    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorite.favorites,
  isDataLoaded: state.favorite.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteOffersList());
  }
});

FavoritesScreen.propTypes = {
  favorites: PropTypes.arrayOf(Types.OFFER),
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
