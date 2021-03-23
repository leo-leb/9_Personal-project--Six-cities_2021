export const ActionType = {
  REQUIRED_AUTHORIZATION: `app/requiredAuthorization`,
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};
