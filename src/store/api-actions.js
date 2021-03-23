import {ActionCreator as ActionCreatorMain} from "./main-screen/action";
import {ActionCreator as ActionCreatorFavorites} from "./favorite-screen/action";
import {ActionCreator as ActionCreatorRoot} from "./root/action";
import {ActionCreator as ActionCreatorApp} from "./app/action";
import {AuthorizationStatus} from "../consts";
import {dataArrayAdapter} from '../common';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreatorMain.loadOffers(dataArrayAdapter(data))))
);

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreatorFavorites.loadOffers(dataArrayAdapter(data))))
);

export const initApp = () => (dispatch, _getState) => {
  Promise
    .all([
      fetchFavoriteOffersList(),
      fetchOffersList()
    ])
    .then(([favoriteOffers, offers]) => {
      dispatch(favoriteOffers);
      dispatch(offers);
    });
  dispatch(ActionCreatorRoot.setAppReady(true));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreatorApp.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreatorApp.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/`)
    .then(() => dispatch(ActionCreatorApp.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const getReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(dataArrayAdapter(data)))
);

export const getNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(dataArrayAdapter(data)))
);
