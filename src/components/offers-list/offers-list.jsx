import React from 'react';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';

import Types from '../../types';

const OffersList = (props) => {
  const {offers, cardSet} = props;

  return <>
    {offers.map((offer, i) => <OfferCard offers={offers} offer={offer} cardSet={cardSet} key={i}/>)}
  </>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  cardSet: Types.CARD_SET
};

export default OffersList;
