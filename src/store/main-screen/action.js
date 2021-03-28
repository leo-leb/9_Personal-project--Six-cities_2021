export const ActionType = {
  LOAD_OFFERS: `main/loadOffers`,
};

export const loadAllOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});
