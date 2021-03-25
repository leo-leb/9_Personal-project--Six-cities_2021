import React from 'react';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Types from '../../types';
import {ActionCreator} from '../../store/root/action';

const OffersList = (props) => {
  const {offers, setActiveOffer, cardSet} = props;

  return <>
    {offers.map((offer, i) => <OfferCard offers={offers} offer={offer} setActiveCard={setActiveOffer} cardSet={cardSet} key={i}/>)}
  </>;
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(offers, id) {
    dispatch(ActionCreator.setActiveOffer(offers, id));
  },
});

OffersList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  setActiveOffer: PropTypes.func,
  cardSet: Types.CARD_SET
};

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
