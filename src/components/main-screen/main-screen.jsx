import React from 'react';
import OffersList from '../offers-list/offers-list';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/main-screen/action';
import {Routes, screenForCardClass, typeOfCards, sizesForImages} from '../../consts';
import {getFilteredOffersByCity} from '../../common';
import Types from '../../types';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import SortForm from '../sort-form/sort-form';
import PropTypes from 'prop-types';

const MainScreen = (props) => {
  const {city, activeCard, changeActiveCard, onCityClick, onCityChange, onSortPriceInc, onSortPriceRed, onSortRate, offersList} = props;

  const screen = screenForCardClass.MAIN;
  const card = typeOfCards.PlaceCard;
  const image = sizesForImages.BIG;

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
            <CitiesList activeCity={city} setActiveCity={onCityClick} onCityChange={onCityChange}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersList.length} places to stay in {city.name}</b>
              <SortForm activeCity={city} onCityChange={onCityChange} onSortPriceInc={onSortPriceInc} onSortPriceRed={onSortPriceRed} onSortRate={onSortRate}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersList} changeActiveCard={changeActiveCard} screen={screen} card={card} image={image}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={city}
                  points={offersList}
                  activeCard={activeCard}
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
  offersList: getFilteredOffersByCity(state.main.offersList, state.main.city),
  activeCard: state.main.activeCard
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  changeActiveCard(id) {
    dispatch(ActionCreator.changeActiveCard(id));
  },
  onCityChange(city) {
    dispatch(ActionCreator.updateOffers(city));
  },
  onSortPriceInc(city) {
    dispatch(ActionCreator.sortOffersByPriceIncrease(city));
  },
  onSortPriceRed(city) {
    dispatch(ActionCreator.sortOffersByPriceReduce(city));
  },
  onSortRate(city) {
    dispatch(ActionCreator.sortOffersByRate(city));
  },
});

MainScreen.propTypes = {
  city: Types.CITY,
  activeCard: PropTypes.object.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortPriceInc: PropTypes.func.isRequired,
  onSortPriceRed: PropTypes.func.isRequired,
  onSortRate: PropTypes.func.isRequired,
  offersList: PropTypes.arrayOf(Types.OFFER)
};

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
