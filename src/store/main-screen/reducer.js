import {ActionType} from './action';

const initialState = {
  offers: [],
  isDataLoaded: false
};

const reducerMain = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    default:
      return state;
  }
};

export default reducerMain;
