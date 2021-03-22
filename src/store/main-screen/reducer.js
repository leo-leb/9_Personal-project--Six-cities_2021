import {ActionType} from './action';

const initialState = {
  offers: []
};

const reducerMain = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};

export default reducerMain;
