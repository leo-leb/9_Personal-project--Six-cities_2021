import {ActionCreator as ActionCreatorMain} from "./main-screen/action";
import {ActionCreator as ActionCreatorFavorites} from "./favorite-screen/action";
import {AuthorizationStatus} from "../consts";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreatorMain.loadOffers(data)))
);

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreatorFavorites.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreatorFavorites.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreatorFavorites.requireAuthorization(AuthorizationStatus.AUTH)))
);
