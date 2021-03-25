import {ActionType} from './action';

const initialState = {
  reviews: [],
  offers: []
};

const reducerRoom = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};

export default reducerRoom;
