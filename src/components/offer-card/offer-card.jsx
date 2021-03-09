import React, {useState} from 'react';
import Types from '../../types';
import PropTypes from 'prop-types';
import {screenForCardClass, sizesForImages, starsRate} from '../../consts';

const OfferCard = (props) => {
  const {screen, changeActiveCard, offer, card, image} = props;
  const {mark, smallImage, bigImage, price, rate, name, type} = offer;
  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <article
      className={screen + `__` + card + ` place-card`}
      onMouseEnter={() => {
        setActiveOffer({activeOffer: offer.id});
        changeActiveCard(offer.id);
      }}
    >
      {screen === screenForCardClass.MAIN && offer.mark && <div className="place-card__mark"><span>{mark}</span></div>}
      <div
        className={screen + `__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          {image === sizesForImages.SMALL ?
            <img className="place-card__image" src={smallImage} width={sizesForImages.SMALL.width} height={sizesForImages.SMALL.height} alt="Place image" /> :
            <img className="place-card__image" src={bigImage} width={sizesForImages.BIG.width} height={sizesForImages.BIG.height} alt="Place image" />
          }
        </a>
      </div>
      <div
        className={screen !== screenForCardClass.FAVORITES ? `place-card__info` : screenForCardClass.FAVORITES + `__card-info place-card__info`}
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
            <span style={{width: starsRate(rate)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: Types.OFFER,
  changeActiveCard: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  image: Types.IMAGE
};

export default OfferCard;
