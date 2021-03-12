import {ActionType} from './action';
import offers from '../../mocks/offers';

const initialState = {
  userId: 1,
  favoriteOffers: offers,
};

const reducerFavorite = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ID:
      return {
        ...state,
        userId: action.payload
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload
      };
    default:
      return state;
  }
};

export default reducerFavorite;
