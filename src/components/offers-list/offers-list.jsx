import React from 'react';
import OfferCardForMainScreen from '../offer-card/offer-card-main';
import OfferCardForRoomScreen from '../offer-card/offer-card-room';
import Types from '../../types';
import PropTypes from 'prop-types';
import {pages} from '../../consts';

const OffersList = (props) => {
  const {offers, screen} = props;

  const getOfferCardForScreen = (page, card, index) => {
    switch (page) {
      case pages.MainScreen:
        return <OfferCardForMainScreen offer={card} key={card + index}/>;
      case pages.RoomScreen:
        return <OfferCardForRoomScreen offer={card} key={card + index}/>;
    }
    return null;
  };

  return <>
    {offers.map((offer, i) => getOfferCardForScreen(screen, offer, i))}
  </>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER),
  screen: PropTypes.string.isRequired
};

export default OffersList;
