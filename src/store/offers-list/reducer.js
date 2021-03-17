import {ActionType} from './action';

const initialState = {
  activeOfferCard: {}
};

const reducerOffersList = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CARD:
      return {
        ...state,
        activeOfferCard: action.payload
      };
    default:
      return state;
  }
};

export default reducerOffersList;
