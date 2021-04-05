import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list';
import OffersList from '../offers-list/offers-list';
import ReviewForm from '../review-form/review-form';
import FavoriteButton from "../offer-card-button/offer-card-button";
import Map from '../map/map';
import {AppRoute, CardSetting, getRate, AuthorizationStatus, FavoriteButtonType} from '../../const';
import {getOfferById} from '../../selectors';
import {fetchReviews, fetchNearOffers, setFavoriteStatus} from "../../store/api-actions";
import {redirectToRoute} from "../../store/root/action";

const RoomScreen = () => {
  const {offers} = useSelector((state) => state.MAIN);
  const {nearOffers} = useSelector((state) => state.ROOM);
  const {authStatus} = useSelector((state) => state.ROOT);

  const dispatch = useDispatch();

  let {id} = useParams();
  const offerId = Number(id);

  useEffect(() => {
    dispatch(fetchReviews(offerId));
    dispatch(fetchNearOffers(offerId));
  }, [id]);

  const currentOffer = getOfferById(offers, offerId);

  if (currentOffer === undefined) {
    dispatch(redirectToRoute(AppRoute.NOT_FOUND));
  }

  const {isPremium, isFavorite, maxAdults, bedrooms, price, rating, type, title, description, goods, images, host, city} = currentOffer;

  const [name, setName] = useState(isFavorite);

  useEffect(() => {
    if (name !== isFavorite) {
      dispatch(setFavoriteStatus(id, (isFavorite ? 0 : 1)));
    }
  }, [name]);

  if (name !== isFavorite && authStatus !== AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.SIGNIN));
  }

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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((item, i) => {
                return (
                  <div className="property__image-wrapper" key={item + i}>
                    <img className="property__image" src={item} alt="Photo studio" />
                  </div>
                );
              }).slice(0, 6)}
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
                <FavoriteButton name={name} setName={setName} type={FavoriteButtonType.ROOM_SCREEN} isFavorite={isFavorite}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRate(Math.round(rating))}}></span>
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
                <ReviewsList/>
                {authStatus === AuthorizationStatus.AUTH ? <ReviewForm id={offerId}/> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={city}
              points={nearOffers}
              actualPoint={currentOffer}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearOffers} cardSet={CardSetting.ROOM}/>
            </div>
          </section>
        </div>
      </main>

    </div>

  );
};

export default RoomScreen;
