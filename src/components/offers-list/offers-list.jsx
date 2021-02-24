import React from 'react';
import OfferCard from '../offer-card/offer-card';
import Types from '../../types';
import PropTypes from 'prop-types';

const OffersList = (props) => {
  const {offers} = props;

  return <>
    {offers.map((offer, i) => <OfferCard key={offer + i} offer={offer}/>)}
  </>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default OffersList;
