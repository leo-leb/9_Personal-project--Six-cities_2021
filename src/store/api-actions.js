import {ActionCreator as ActionCreatorMain} from "./main-screen/action";
import {ActionCreator as ActionCreatorFavorites} from "./favorite-screen/action";
import {ActionCreator as ActionCreatorRoot} from "./root/action";
import {ActionCreator as ActionCreatorRoom} from "./room-screen/action";
import {AuthorizationStatus} from "../consts";
import {dataArrayAdapter} from '../common';

export const fetchAllOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreatorMain.loadOffers(dataArrayAdapter(data))))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreatorFavorites.loadOffers(dataArrayAdapter(data))))
);

export const setFavoriteStatus = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${hotelId}/${status}`)
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreatorRoot.setAuthStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const initApp = () => (dispatch, _getState) => {
  dispatch(checkAuth())
    .then(() => dispatch(fetchAllOffers()))
    .then(() => dispatch(ActionCreatorRoot.setAppReady(true)));
};

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreatorRoot.setAuthStatus(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/`)
    .then(() => dispatch(ActionCreatorRoot.setAuthStatus(AuthorizationStatus.NO_AUTH)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreatorRoom.loadReviews(dataArrayAdapter(data))))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreatorRoom.loadOffers(dataArrayAdapter(data))))
);

export const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
);
