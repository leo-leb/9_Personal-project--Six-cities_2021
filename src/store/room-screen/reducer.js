import {createReducer} from '@reduxjs/toolkit';
import {loadReviews, loadNearOffers} from './action';

const initialState = {
  reviews: [],
  nearOffers: []
};

const reducerRoom = createReducer(initialState, (builder) => {
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
  });
  builder.addCase(loadNearOffers, (state, action) => {
    state.nearOffers = action.payload;
  });
});

export default reducerRoom;
