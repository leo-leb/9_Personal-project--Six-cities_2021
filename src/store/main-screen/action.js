export const ActionType = {
  LOAD_OFFERS: `main/loadOffers`,
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};
