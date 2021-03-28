import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Types from '../../types';
import {settingsForCard, starsRate, AuthorizationStatus, Routes} from '../../consts';

import {setFavoriteStatus} from "../../store/api-actions";

const OfferCard = (props) => {
  const {offers, offer, setActiveCard, cardSet, authStatus, changeFavorite} = props;
  const {id, isPremium, isFavorite, previewImage, price, rating, title, type} = offer;

  const [activeOffer, setActiveOffer] = useState(null);
  const [click, setClick] = useState(isFavorite);

  useEffect(() => {
    setActiveCard(offers, activeOffer);
  }, [activeOffer]);

  if (click && authStatus !== AuthorizationStatus.AUTH) {
    return (
      <Redirect to={Routes.SIGNIN} />
    );
  }

  return (
    <article
      className={cardSet.screen + `__` + cardSet.card + ` place-card`}
      onMouseEnter={() => {
        setActiveOffer(id);
        setActiveCard(offers, activeOffer);
      }}
    >
      {cardSet.screen === settingsForCard.MAIN.screen && isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div
        className={cardSet.screen + `__image-wrapper place-card__image-wrapper`}
      >
        <a>
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
          <button
            className={`place-card__bookmark-button button` + (click ? ` place-card__bookmark-button--active` : ``)}
            type="button"
            onClick={() => {
              setClick(!click);
              changeFavorite(id, (isFavorite ? 0 : 1));
            }}
          >
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

const mapStateToProps = ({ROOT}) => ({
  authStatus: ROOT.authStatus
});

const mapDispatchToProps = (dispatch) => ({
  changeFavorite(id, status) {
    dispatch(setFavoriteStatus(id, status));
  }
});

OfferCard.propTypes = {
  offer: Types.OFFER,
  setActiveCard: PropTypes.func,
  cardSet: Types.CARD_SET,
  offers: PropTypes.arrayOf(Types.OFFER),
  authStatus: PropTypes.string.isRequired,
  changeFavorite: PropTypes.func,
};

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
