import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {Routes, screenForCardClass, typeOfCards, sizesForImages, starsRate} from '../../consts';
import {getFilteredOffersById} from '../../selectors';
import ReviewsList from '../reviews-list/reviews-list';
import OffersList from '../offers-list/offers-list';
import ReviewForm from '../review-form/review-form';
import Types from '../../types';
import PropTypes from 'prop-types';
import Map from '../map/map';
import {createAPI} from "../../services/api";
import {dataArrayAdapter} from '../../common';

const RoomScreen = (props) => {
  const {offers} = props;

  const [reviews, setReview] = useState([]);
  const [neighborOffers, setNeighborOffers] = useState([]);

  let {id} = useParams();
  const offerId = Number(id);

  const api = createAPI();

  useEffect(() => {
    api
      .get(`/comments/${offerId}`)
      .then(({data}) => {
        setReview(dataArrayAdapter(data));
      });
  }, [id]);

  useEffect(() => {
    api
      .get(`/hotels/${offerId}/nearby`)
      .then(({data}) => {
        setNeighborOffers(dataArrayAdapter(data));
      });
  }, [id]);

  const currentOffer = getFilteredOffersById(offers, offerId);

  const {isPremium, maxAdults, bedrooms, price, rating, type, title, description, goods, images, host, city} = currentOffer;

  const screen = screenForCardClass.ROOM;
  const card = typeOfCards.Card;
  const image = sizesForImages.BIG;

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
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: starsRate(rating)}}></span>
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
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={city}
              points={neighborOffers}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={neighborOffers} screen={screen} card={card} image={image}/>
            </div>
          </section>
        </div>
      </main>

    </div>

  );
};

const mapStateToProps = (state) => ({
  offers: state.main.offers,
});

RoomScreen.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  activeOfferCard: PropTypes.object.isRequired,
  activeOffer: Types.OFFER
};

export {RoomScreen};
export default connect(mapStateToProps)(RoomScreen);
