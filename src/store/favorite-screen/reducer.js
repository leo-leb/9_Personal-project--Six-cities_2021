import {ActionType} from './action';
import offers from '../../mocks/offers';

const initialState = {
  id: 1,
  offersList: offers,
};

const reducerFavorite = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ID:
      return {
        ...state,
        id: action.payload
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    case ActionType.UPDATE_CITIES_LIST:
      return {
        ...state,
        citiesList: action.payload
      };
    default:
      return state;
  }
};

export default reducerFavorite;
