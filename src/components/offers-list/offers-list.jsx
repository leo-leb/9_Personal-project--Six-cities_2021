import React from 'react';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Types from '../../types';
import {setActiveOffer} from '../../store/root/action';

const OffersList = (props) => {
  const {offers, setActiveCard, cardSet} = props;

  return <>
    {offers.map((offer, i) => <OfferCard offers={offers} offer={offer} setActiveCard={setActiveCard} cardSet={cardSet} key={i}/>)}
  </>;
};

const mapDispatchToProps = (dispatch) => ({
  setActiveCard(offers, id) {
    dispatch(setActiveOffer(offers, id));
  },
});

OffersList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  setActiveCard: PropTypes.func,
  cardSet: Types.CARD_SET
};

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
