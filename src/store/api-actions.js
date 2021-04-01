import {loadAllOffers} from "./main-screen/action";
import {loadFavoriteOffers} from "./favorite-screen/action";
import {setAppReady, setAuthStatus, redirectToRoute} from "./root/action";
import {loadReviews, loadNearOffers} from "./room-screen/action";
import {ApiRoutes, AppRoutes, AuthorizationStatus} from "../consts";
import {dataArrayAdapter} from '../common';

export const initApp = () => (dispatch, _getState) => {
  dispatch(checkAuth())
    .then(() => dispatch(fetchAllOffers()))
    .then(() => dispatch(setAppReady(true)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoutes.LOGIN)
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoutes.LOGIN, {email, password})
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoutes.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiRoutes.LOGOUT)
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.NO_AUTH)))
);

export const fetchAllOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoutes.ALL_OFFERS)
    .then(({data}) => dispatch(loadAllOffers(dataArrayAdapter(data))))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoutes.FAVORITE_OFFERS)
    .then(({data}) => dispatch(loadFavoriteOffers(dataArrayAdapter(data))))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(ApiRoutes.ALL_OFFERS + `/${id}` + ApiRoutes.NEAR_OFFERS)
    .then(({data}) => dispatch(loadNearOffers(dataArrayAdapter(data))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(ApiRoutes.REVIEWS + `/${id}`)
    .then(({data}) => dispatch(loadReviews(dataArrayAdapter(data))))
);

export const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(ApiRoutes.REVIEWS + `/${id}`, {comment, rating})
    .then(() => dispatch(fetchReviews(id)))
);

export const setFavoriteStatus = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(ApiRoutes.FAVORITE_OFFERS + `/${hotelId}/${status}`)
    .then(() => dispatch(fetchAllOffers()))
    .then(() => dispatch(fetchFavoriteOffers()))
);
