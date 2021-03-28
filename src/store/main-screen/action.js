import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFERS: `main/loadOffers`,
};

export const loadAllOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});
