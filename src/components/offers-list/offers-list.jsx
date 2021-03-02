import React from 'react';
import OfferCard from '../offer-card/offer-card';
import Types from '../../types';
import PropTypes from 'prop-types';

const OffersList = (props) => {
  const {offers, screen, card, image} = props;

  return <>
    {offers.map((offer, i) => <OfferCard offer={offer} screen={screen} card={card} image={image} key={i}/>)}
  </>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  screen: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  image: Types.IMAGE,
};

export default OffersList;
