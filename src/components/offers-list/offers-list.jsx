import React from 'react';
import OfferCard from '../offer-card/offer-card';
import Types from '../../types';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/offers-list/action';

const OffersList = (props) => {
  const {offers, changeActiveCard, screen, card, image} = props;

  return <>
    {offers.map((offer, i) => <OfferCard offers={offers} offer={offer} changeActiveCard={changeActiveCard} screen={screen} card={card} image={image} key={i}/>)}
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
  activeOffer: PropTypes.number,
  changeActiveCard: PropTypes.func,
  changeOfferId: PropTypes.func,
  screen: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  image: Types.IMAGE,
  activeOfferCard: PropTypes.object,
};

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
