import {loadAllOffers} from "./main-screen/action";
import {loadFavoriteOffers} from "./favorite-screen/action";
import {setAppReady, setAuthStatus, redirectToRoute} from "./root/action";
import {loadReviews, loadNearOffers} from "./room-screen/action";
import {ApiRoute, AppRoute, AuthorizationStatus} from "../const";
import {dataArrayAdapter} from '../common';

export const initApp = () => (dispatch, _getState) => {
  dispatch(checkAuth())
    .then(() => dispatch(fetchAllOffers()))
    .then(() => dispatch(setAppReady(true)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(setAuthStatus(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const fetchAllOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.ALL_OFFERS)
    .then(({data}) => dispatch(loadAllOffers(dataArrayAdapter(data))))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE_OFFERS)
    .then(({data}) => dispatch(loadFavoriteOffers(dataArrayAdapter(data))))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(ApiRoute.ALL_OFFERS + `/${id}` + ApiRoute.NEAR_OFFERS)
    .then(({data}) => dispatch(loadNearOffers(dataArrayAdapter(data))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(ApiRoute.REVIEWS + `/${id}`)
    .then(({data}) => dispatch(loadReviews(dataArrayAdapter(data))))
);

export const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.REVIEWS + `/${id}`, {comment, rating})
    .then(() => dispatch(fetchReviews(id)))
);

export const setFavoriteStatus = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(ApiRoute.FAVORITE_OFFERS + `/${hotelId}/${status}`)
    .then(() => dispatch(fetchAllOffers()))
    .then(() => dispatch(fetchFavoriteOffers()))
);
