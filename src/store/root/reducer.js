import {ActionType} from './action';

const initialState = {
  isAppReady: false
};

const reducerRoot = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_READY:
      return {
        ...state,
        isAppReady: true
      };
    default:
      return state;
  }
};

export default reducerRoot;
