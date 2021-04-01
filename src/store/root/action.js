import {createAction} from '@reduxjs/toolkit';
import {getFilteredOffersById} from '../../selectors';

export const ActionType = {
  SET_APP_READY: `root/setAppReady`,
  SET_AUTH_STATUS: `root/setAuthStatus`,
  SET_ACTIVE_OFFER: `root/setActiveOffer`,
  REDIRECT_TO_ROUTE: `root/redirectToRoute`
};

export const setAppReady = createAction(ActionType.SET_APP_READY, (status) => {
  return {
    payload: status
  };
});

export const setAuthStatus = createAction(ActionType.SET_AUTH_STATUS, (status) => {
  return {
    payload: status
  };
});

export const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (offers, id) => {
  let activeOffer = getFilteredOffersById(offers, id);

  return {
    payload: activeOffer
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
