import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import FavoriteButton from "../offer-card-button/offer-card-button";
import {typeOffer, typeCardSet} from '../../types';
import {setFavoriteStatus} from "../../store/api-actions";
import {redirectToRoute} from "../../store/root/action";
import {AppRoute, CardSetting, getRate, AuthorizationStatus, FavoriteButtonType} from '../../const';

const OfferCard = (props) => {
  const {offer, cardSet, setActiveCard} = props;
  const {id, isPremium, isFavorite, previewImage, price, rating, title, type} = offer;

  const {authStatus} = useSelector((state) => state.ROOT);
  const dispatch = useDispatch();

  const [name, setName] = useState(isFavorite);

  useEffect(() => {
    if (name !== isFavorite) {
      dispatch(setFavoriteStatus(id, (isFavorite ? 0 : 1)));
    }
  }, [name]);

  useEffect(() => {
    return () => {
      setName(isFavorite);
    };
  }, [offer]);

  if (name !== isFavorite && authStatus !== AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.SIGNIN));
  }

  return (
    <article
      className={cardSet.screen + `__` + cardSet.card + ` place-card`}
      onMouseEnter={() => {
        setActiveCard(id);
      }}
    >
      {cardSet.screen === CardSetting.MAIN.screen && isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div
        className={cardSet.screen + `__image-wrapper place-card__image-wrapper`}
      >
        <a>
          <img className="place-card__image" src={previewImage} width={cardSet.image.width} height={cardSet.image.height} alt="Place image" />
        </a>
      </div>
      <div className={cardSet.screen !== CardSetting.FAVORITES.screen ? `place-card__info` : CardSetting.FAVORITES.screen + `__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton name={name} setName={setName} type={FavoriteButtonType.OFFER_CARD} isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRate(Math.round(rating))}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
        >
          <Link
            href="#"
            to={`/offer/${id}`}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: typeOffer,
  setActiveCard: PropTypes.func,
  cardSet: typeCardSet
};

export default OfferCard;
