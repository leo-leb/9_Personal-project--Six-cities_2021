import {ActionType} from './action';
import offers from '../../mocks/offers';
import {defaultStates} from '../../consts';

const defaultState = defaultStates.MAIN;

const initialState = {
  city: defaultState,
  offersList: offers
};

const reducerMain = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        offersList: action.payload
      };
    default:
      return state;
  }
};

export default reducerMain;
