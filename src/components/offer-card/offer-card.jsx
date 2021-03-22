import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Types from '../../types';
import {settingsForCard, starsRate} from '../../consts';

const OfferCard = (props) => {
  const {offers, changeActiveCard, offer, cardSet} = props;
  const {id, isPremium, previewImage, price, rating, title, type} = offer;

  const [activeOffer, setActiveOffer] = useState(null);

  useEffect(() => {
    changeActiveCard(offers, activeOffer);
  }, [activeOffer]);

  return (
    <article
      className={cardSet.screen + `__` + cardSet.card + ` place-card`}
      onMouseEnter={() => {
        setActiveOffer(id);
        changeActiveCard(offers, activeOffer);
      }}
    >
      {cardSet.screen === settingsForCard.MAIN.screen && isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div
        className={cardSet.screen + `__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img className="place-card__image" src={previewImage} width={cardSet.image.width} height={cardSet.image.height} alt="Place image" />
        </a>
      </div>
      <div
        className={cardSet.screen !== settingsForCard.FAVORITES.screen ? `place-card__info` : settingsForCard.FAVORITES.screen + `__card-info place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsRate(Math.round(rating))}}></span>
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
  offer: Types.OFFER,
  changeActiveCard: PropTypes.func,
  cardSet: Types.CARD_SET,
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default OfferCard;
