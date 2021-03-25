export const ActionType = {
  LOAD_REVIEWS: `room/loadReviews`,
  LOAD_OFFERS: `room/loadOffers`
};

export const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};
