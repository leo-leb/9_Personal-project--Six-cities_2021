export const ActionType = {
  LOAD_FAVORITE_OFFERS: `favorites/loadOffers`,
  SET_LOADING_STATUS: `favorites/setLoadingStatus`
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers
  }),
  setLoadingStatus: (status) => {
    return {
      type: ActionType.SET_LOADING_STATUS,
      payload: status
    };
  }
};
