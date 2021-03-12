export const ActionType = {
  CHANGE_OFFER_ID: `offersList/changeOfferId`
};

export const ActionCreator = {
  changeOfferId: (id) => ({
    type: ActionType.CHANGE_OFFER_ID,
    payload: id
  })
};
