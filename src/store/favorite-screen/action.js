import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFERS: `favorite/loadOffers`
};

export const loadFavoriteOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});
