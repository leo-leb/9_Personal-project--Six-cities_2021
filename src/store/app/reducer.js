import {ActionType} from './action';
import {AuthorizationStatus} from '../../consts';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export default reducerApp;
