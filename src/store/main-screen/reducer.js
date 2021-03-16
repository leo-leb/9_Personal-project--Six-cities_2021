import {ActionType} from './action';
import {defaultStates, AuthorizationStatus} from '../../consts';

const defaultState = defaultStates.MAIN;

const initialState = {
  city: defaultState,
  offers: [],
  offersSorted: [],
  activeOfferCard: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false
};

const reducerMain = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.SORT_OFFERS_CITY:
      return {
        ...state,
        offersSorted: action.payload
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SORT_OFFERS_PRICE_INC:
      return {
        ...state,
        offersSorted: action.payload
      };
    case ActionType.SORT_OFFERS_PRICE_RED:
      return {
        ...state,
        offersSorted: action.payload
      };
    case ActionType.SORT_OFFERS_RATE:
      return {
        ...state,
        offersSorted: action.payload
      };
    case ActionType.CHANGE_CARD:
      return {
        ...state,
        activeOfferCard: action.payload
      };
    default:
      return state;
  }
};

export default reducerMain;
