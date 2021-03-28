export const ActionType = {
  LOAD_OFFERS: `favorite/loadOffers`
};

export const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});
