import {ActionType} from './action';

const initialState = {
  offerId: {}
};

const reducerOffersList = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_OFFER_ID:
      return {
        ...state,
        offerId: action.payload
      };
    default:
      return {
        offerId: {}
      };
  }
};

export default reducerOffersList;
