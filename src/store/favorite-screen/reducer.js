import {ActionType} from './action';
import {AuthorizationStatus} from '../../consts';

const initialState = {
  // authStatus: AuthorizationStatus.NO_AUTH,
  favoriteOffers: [],
  // isDataLoaded: false
};

const reducerFavorites = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.CHANGE_STATUS:
    //   return {
    //     ...state,
    //     authStatus: action.payload,
    //   };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload,
        // isDataLoaded: true
      };
    default:
      return state;
  }
};

export default reducerFavorites;
