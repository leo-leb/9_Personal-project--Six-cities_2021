import {createReducer} from '@reduxjs/toolkit';
import {setAppReady, setAuthStatus, setActiveOffer} from './action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  isAppReady: false,
  authStatus: AuthorizationStatus.NO_AUTH,
  activeOffer: {}
};

const reducerRoot = createReducer(initialState, (builder) => {
  builder.addCase(setAppReady, (state, action) => {
    state.isAppReady = action.payload;
  });
  builder.addCase(setAuthStatus, (state, action) => {
    state.authStatus = action.payload;
  });
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOffer = action.payload;
  });
});

export default reducerRoot;
