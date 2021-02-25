import React from 'react';
import Types from '../../types';
import OfferCardTemplate from './offer-card-template';
import {cardsClass} from '../../consts';

const OfferCardForMainScreen = (props) => {
  const {...restProps} = props;

  return (
    <OfferCardTemplate
      className={cardsClass.MainScreen}
      {...restProps}
    />
  );
};

OfferCardForMainScreen.propTypes = {
  offer: Types.OFFER
};

export default OfferCardForMainScreen;
