import React from 'react';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Types from '../../types';
import {ActionCreator} from '../../store/offers-list/action';

const OffersList = (props) => {
  const {offers, changeActiveCard, cardSet} = props;

  return <>
    {offers.map((offer, i) => <OfferCard offers={offers} offer={offer} changeActiveCard={changeActiveCard} cardSet={cardSet} key={i}/>)}
  </>;
};

const mapStateToProps = (state) => ({
  activeOfferCard: state.offersList.activeOfferCard,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(offers, id) {
    dispatch(ActionCreator.changeActiveCard(offers, id));
  },
});

OffersList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  changeActiveCard: PropTypes.func,
  cardSet: Types.CARD_SET,
  activeOfferCard: PropTypes.object,
};

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
