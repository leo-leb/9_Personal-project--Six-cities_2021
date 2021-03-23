export const ActionType = {
  SET_READY: `root/setAppReady`
};

export const ActionCreator = {
  setAppReady: (status) => {
    return {
      type: ActionType.SET_READY,
      payload: status
    };
  }
};
