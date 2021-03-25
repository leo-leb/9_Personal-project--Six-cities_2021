export const ActionType = {
  LOAD_OFFERS: `favorite/loadOffers`
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};
