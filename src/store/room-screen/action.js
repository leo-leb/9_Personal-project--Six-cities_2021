export const ActionType = {
  LOAD_REVIEWS: `room/loadReviews`,
  LOAD_OFFERS: `room/loadOffers`
};

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const loadNearOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});
