import React from 'react';
import Types from '../../types';
import OfferCardTemplate from './offer-card-template';
import {cardsClass} from '../../consts';

const OfferCardForRoomScreen = (props) => {
  const {...restProps} = props;

  return (
    <OfferCardTemplate
      className={cardsClass.RoomScreen}
      {...restProps}
    />
  );
};

OfferCardForRoomScreen.propTypes = {
  offer: Types.OFFER
};

export default OfferCardForRoomScreen;
