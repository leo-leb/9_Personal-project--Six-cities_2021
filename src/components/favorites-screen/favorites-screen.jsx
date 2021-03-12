import React from 'react';
import FavoritesList from '../favorites-list/favorites-list';
import {Link} from 'react-router-dom';
import {Routes} from '../../consts';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/favorite-screen/action';
import Types from '../../types';
import PropTypes from 'prop-types';

const FavoritesScreen = (props) => {
  const {favoriteOffers} = props;

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
            <FavoritesList offers={favoriteOffers}/>
          </section>
        </div>
      </main>

    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.favorite.userId,
  favoriteOffers: state.favorite.favoriteOffers
});

const mapDispatchToProps = (dispatch) => ({
  changeId(userId) {
    dispatch(ActionCreator.changeId(userId));
  },
  updateOffers(favoriteOffers) {
    dispatch(ActionCreator.updateOffers(favoriteOffers));
  }
});

FavoritesScreen.propTypes = {
  userId: PropTypes.number.isRequired,
  favoriteOffers: PropTypes.arrayOf(Types.OFFER)
};

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
