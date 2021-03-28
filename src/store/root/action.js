import {getFilteredOffersById} from '../../selectors';

export const ActionType = {
  SET_APP_READY: `root/setAppReady`,
  SET_AUTH_STATUS: `root/setAuthStatus`,
  SET_ACTIVE_OFFER: `root/setActiveOffer`
};

export const setAppReady = (status) => ({
  type: ActionType.SET_APP_READY,
  payload: status
});

export const setAuthStatus = (status) => ({
  type: ActionType.SET_AUTH_STATUS,
  payload: status
});

export const setActiveOffer = (offers, id) => {
  let activeOffer = getFilteredOffersById(offers, id);

  return {
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOffer
  };
};
