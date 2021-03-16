import React, {useEffect} from 'react';
import OffersList from '../offers-list/offers-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/main-screen/action';
import {Routes, screenForCardClass, typeOfCards, sizesForImages} from '../../consts';
import {getFilteredOffersByCity} from '../../selectors';
import Types from '../../types';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import SortForm from '../sort-form/sort-form';
import PropTypes from 'prop-types';

import {fetchQuestionList} from "../../store/main-screen/api-actions";

const MainScreen = (props) => {
  const {city, activeOfferCard, authorizationStatus, changeActiveCard, onCityClick, onCityChange, onSortPriceInc, onSortPriceRed, onSortRate, offers, isDataLoaded, onLoadData, offersSorted} = props;

  const screen = screenForCardClass.MAIN;
  const card = typeOfCards.PlaceCard;
  const image = sizesForImages.BIG;

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
            <CitiesList activeCity={city} setActiveCity={onCityClick} onCityChange={onCityChange} offers={offers}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> places to stay in {city.name}</b>
              <SortForm activeCity={city} onCityChange={onCityChange} onSortPriceInc={onSortPriceInc} onSortPriceRed={onSortPriceRed} onSortRate={onSortRate} offers={offersSorted}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersSorted} changeActiveCard={changeActiveCard} screen={screen} card={card} image={image}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={city}
                  points={offersSorted}
                  activeCard={activeOfferCard}
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
  city: state.main.city,
  offers: state.main.offers,
  offersSorted: getFilteredOffersByCity(state.main.offers, state.main.city),
  activeOfferCard: state.main.activeOfferCard,
  isDataLoaded: state.main.isDataLoaded,
  authorizationStatus: state.main.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  changeActiveCard(offers, id) {
    dispatch(ActionCreator.changeActiveCard(offers, id));
  },
  onCityChange(offers, city) {
    dispatch(ActionCreator.sortOffersByCity(offers, city));
  },
  onSortPriceInc(offers) {
    dispatch(ActionCreator.sortOffersByPriceIncrease(offers));
  },
  onSortPriceRed(offers) {
    dispatch(ActionCreator.sortOffersByPriceReduce(offers));
  },
  onSortRate(offers) {
    dispatch(ActionCreator.sortOffersByRate(offers));
  },
  onLoadData() {
    dispatch(fetchQuestionList());
  }
});

MainScreen.propTypes = {
  city: Types.CITY,
  activeOfferCard: PropTypes.object.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortPriceInc: PropTypes.func.isRequired,
  onSortPriceRed: PropTypes.func.isRequired,
  onSortRate: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(Types.OFFER),
  offersSorted: PropTypes.arrayOf(Types.OFFER),
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
