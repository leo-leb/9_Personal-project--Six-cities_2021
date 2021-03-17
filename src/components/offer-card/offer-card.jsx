import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Types from '../../types';
import PropTypes from 'prop-types';
import {screenForCardClass, starsRate} from '../../consts';

const OfferCard = (props) => {
  const {offers, screen, changeActiveCard, offer, card, image} = props;
  const {id, isPremium, previewImage, price, rating, title, type} = offer;

  const [activeOffer, setActiveOffer] = useState(null);

  useEffect(() => {
    changeActiveCard(offers, activeOffer);
  }, [activeOffer]);

  return (
    <article
      className={screen + `__` + card + ` place-card`}
      onMouseEnter={() => {
        setActiveOffer(id);
      }}
    >
      {screen === screenForCardClass.MAIN && isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div
        className={screen + `__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img className="place-card__image" src={previewImage} width={image.width} height={image.height} alt="Place image" />
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
            <span style={{width: starsRate(rating)}}></span>
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
  clickedOffer: PropTypes.number,
  changeActiveCard: PropTypes.func,
  screen: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  image: Types.IMAGE,
  onNameClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default OfferCard;
