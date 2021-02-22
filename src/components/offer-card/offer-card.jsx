import React, {useState} from 'react';
import Types from '../../types';

const OfferCard = (props) => {
  const {offer} = props;
  const {mark, image, price, rate, name, type} = offer;
  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => {
        setActiveOffer({activeOffer: offer.id});
      }}
    >
      {offer.mark ? <div className="place-card__mark"><span>{mark}</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
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
            <span style={{width: rate}}></span>
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
  offer: Types.OFFER
};

export default OfferCard;
