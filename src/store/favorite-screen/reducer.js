import {ActionType} from './action';

const initialState = {
  favoriteOffers: [],
  isDataLoaded: false
};

const reducerFavorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload
      };
    case ActionType.SET_LOADING_STATUS:
      return {
        ...state,
        isDataLoaded: action.payload
      };
    default:
      return state;
  }
};

export default reducerFavorites;
