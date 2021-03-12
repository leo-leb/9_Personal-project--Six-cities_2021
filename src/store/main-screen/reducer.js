import {ActionType} from './action';
import offers from '../../mocks/offers';
import {defaultStates} from '../../consts';

const defaultState = defaultStates.MAIN;

const initialState = {
  city: defaultState,
  allOffers: offers,
  activeOfferCard: {}
};

const reducerMain = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.CHANGE_CARD:
      return {
        ...state,
        activeOfferCard: action.payload
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        allOffers: action.payload
      };
    case ActionType.SORT_OFFERS_PRICE_INC:
      return {
        ...state,
        allOffers: action.payload
      };
    case ActionType.SORT_OFFERS_PRICE_RED:
      return {
        ...state,
        allOffers: action.payload
      };
    case ActionType.SORT_OFFERS_RATE:
      return {
        ...state,
        allOffers: action.payload
      };
    default:
      return state;
  }
};

export default reducerMain;
