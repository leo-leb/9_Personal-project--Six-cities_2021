import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_REVIEWS: `room/loadReviews`,
  LOAD_NEAR_OFFERS: `room/loadNearOffers`
};

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => {
  return {
    payload: reviews
  };
});

export const loadNearOffers = createAction(ActionType.LOAD_NEAR_OFFERS, (offers) => {
  return {
    payload: offers
  };
});
