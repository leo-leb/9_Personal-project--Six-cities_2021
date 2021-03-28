import React, {useEffect, useState} from 'react';
import {Link, useParams, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list';
import OffersList from '../offers-list/offers-list';
import ReviewForm from '../review-form/review-form';
import Types from '../../types';
import PropTypes from 'prop-types';
import Map from '../map/map';
import {Routes, settingsForCard, starsRate, AuthorizationStatus} from '../../consts';
import {getFilteredOffersById} from '../../selectors';

import {fetchReviews, fetchNearOffers, setFavoriteStatus} from "../../store/api-actions";

const RoomScreen = (props) => {
  const {allOffers, reviews, nearOffers, getReviews, getOffers, changeFavorite, authStatus} = props;

  let {id} = useParams();
  const offerId = Number(id);

  useEffect(() => {
    getReviews(offerId);
    getOffers(offerId);
  }, [id]);

  const currentOffer = getFilteredOffersById(allOffers, offerId);

  if (currentOffer === undefined) {
    return (
      <Redirect to={Routes.NOT_FOUND} />
    );
  }

  const {isPremium, isFavorite, maxAdults, bedrooms, price, rating, type, title, description, goods, images, host, city} = currentOffer;

  const [click, setClick] = useState(isFavorite);

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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((item, i) => {
                return (
                  <div className="property__image-wrapper" key={i}>
                    <img className="property__image" src={item} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                ) : null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`property__bookmark-button button` + (click ? ` property__bookmark-button--active` : ``)}
                  type="button"
                  onClick={() => {
                    setClick(!click);
                    changeFavorite(offerId, (isFavorite ? 0 : 1));
                  }}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: starsRate(Math.round(rating))}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, i) => {
                    return <li className="property__inside-item" key={i}>{good}</li>;
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={host.isPro ?
                      `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` :
                      `property__avatar-wrapper user__avatar-wrapper`}
                  >
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                {authStatus === AuthorizationStatus.AUTH ? <ReviewForm id={offerId}/> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={city}
              points={nearOffers}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearOffers} cardSet={settingsForCard.ROOM}/>
            </div>
          </section>
        </div>
      </main>

    </div>

  );
};

const mapStateToProps = (state) => ({
  allOffers: state.main.offers,
  reviews: state.room.reviews,
  nearOffers: state.room.offers,
  authStatus: state.root.authStatus
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(fetchReviews(id));
  },
  getOffers(id) {
    dispatch(fetchNearOffers(id));
  },
  changeFavorite(id, status) {
    dispatch(setFavoriteStatus(id, status));
  }
});

RoomScreen.propTypes = {
  allOffers: PropTypes.arrayOf(Types.OFFER),
  reviews: PropTypes.arrayOf(Types.REVIEW),
  nearOffers: PropTypes.arrayOf(Types.OFFER),
  getReviews: PropTypes.func,
  getOffers: PropTypes.func,
  changeFavorite: PropTypes.func,
  authStatus: PropTypes.string.isRequired
};

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
