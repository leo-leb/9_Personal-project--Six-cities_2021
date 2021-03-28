import {loadAllOffers} from "./main-screen/action";
import {loadFavoriteOffers} from "./favorite-screen/action";
import {setAppReady, setAuthStatus} from "./root/action";
import {loadReviews, loadNearOffers} from "./room-screen/action";
import {AuthorizationStatus} from "../consts";
import {dataArrayAdapter} from '../common';

export const initApp = () => (dispatch, _getState) => {
  dispatch(checkAuth())
    .then(() => dispatch(fetchAllOffers()))
    .then(() => dispatch(setAppReady(true)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/`)
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.NO_AUTH)))
);

export const fetchAllOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadAllOffers(dataArrayAdapter(data))))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(dataArrayAdapter(data))))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearOffers(dataArrayAdapter(data))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(dataArrayAdapter(data))))
);

export const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(() => dispatch(fetchReviews(id)))
);

export const setFavoriteStatus = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${hotelId}/${status}`)
    .then(() => dispatch(fetchAllOffers()))
    .then(() => dispatch(fetchFavoriteOffers()))
);
