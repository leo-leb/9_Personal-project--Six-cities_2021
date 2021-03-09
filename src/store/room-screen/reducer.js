import {ActionType} from './action';
import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';
import {defaultStates} from '../../consts';

const defaultState = defaultStates.ROOM;

const initialState = {
  id: defaultState.id,
  offer: defaultState,
  reviewsList: reviews,
  offersList: offers
};

const reducerRoom = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ID:
      return {
        ...state,
        id: action.payload
      };
    case ActionType.UPDATE_OFFER:
      return {
        ...state,
        offer: action.payload
      };
    case ActionType.UPDATE_REVIEWS:
      return {
        ...state,
        reviewsList: action.payload
      };
    case ActionType.UPDATE_NEIGHBOR_OFFERS:
      return {
        ...state,
        neighborOffersList: action.payload
      };
    default:
      return state;
  }
};

export default reducerRoom;
