export const ActionType = {
  CHANGE_ID: `favorite/changeId`,
  UPDATE_OFFERS: `favorite/updateOffers`
};

export const ActionCreator = {
  changeId: (userId) => ({
    type: ActionType.CHANGE_ID,
    payload: userId
  }),

  updateOffers: (favoriteOffers) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: favoriteOffers
  }),
};
