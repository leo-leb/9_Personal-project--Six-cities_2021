import {createReducer} from '@reduxjs/toolkit';
import {loadAllOffers} from './action';

const initialState = {
  offers: []
};

const reducerMain = createReducer(initialState, (builder) => {
  builder.addCase(loadAllOffers, (state, action) => {
    state.offers = action.payload;
  });
});

export default reducerMain;
