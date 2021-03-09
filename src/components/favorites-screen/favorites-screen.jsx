import React from 'react';
import FavoritesList from '../favorites-list/favorites-list';
import {Link} from 'react-router-dom';
import {Routes} from '../../consts';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/favorite-screen/action';
import {getCitiesListFromOffers} from '../../common';
import Types from '../../types';
import PropTypes from 'prop-types';

const FavoritesScreen = (props) => {
  const {id, offers, citiesList} = props;
  const {} = id;

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
            <FavoritesList offers={offers} cities={citiesList}/>
          </section>
        </div>
      </main>

    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.favorite.id,
  offers: state.favorite.offersList,
  citiesList: getCitiesListFromOffers(state.favorite.offersList)
});

const mapDispatchToProps = (dispatch) => ({
  changeId(id) {
    dispatch(ActionCreator.changeId(id));
  },
  updateOffers(offers) {
    dispatch(ActionCreator.updateOffers(offers));
  },
  updateCitiesList(offers) {
    dispatch(ActionCreator.updateCitiesList(offers));
  }
});

FavoritesScreen.propTypes = {
  id: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(Types.OFFER),
  citiesList: PropTypes.array.isRequired
};

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
