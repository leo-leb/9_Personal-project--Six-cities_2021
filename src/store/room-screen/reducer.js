import {ActionType} from './action';
import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';

const initialState = {
  allReviews: reviews,
  allOffers: offers,
  activeOfferCard: {}
};

const reducerRoom = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_OFFER_REVIEWS:
      return {
        ...state,
        allReviews: action.payload
      };
    case ActionType.UPDATE_NEIGHBOR_OFFERS:
      return {
        ...state,
        allOffers: action.payload
      };
    case ActionType.CHANGE_ACTIVE_CARD:
      return {
        ...state,
        activeOfferCard: action.payload
      };
    default:
      return state;
  }
};

export default reducerRoom;
