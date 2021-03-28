import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteOffers} from './action';

const initialState = {
  offers: []
};

const reducerFavorites = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.offers = action.payload;
  });
});

export default reducerFavorites;
