import {ActionType} from './action';
import {AuthorizationStatus} from '../../consts';

const initialState = {
  isAppReady: false,
  authStatus: AuthorizationStatus.NO_AUTH,
  activeOffer: {}
};

const reducerRoot = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_APP_READY:
      return {
        ...state,
        isAppReady: true
      };
    case ActionType.SET_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload,
      };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };
    default:
      return state;
  }
};

export default reducerRoot;
