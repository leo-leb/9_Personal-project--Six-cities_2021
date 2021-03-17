import reducerMain from './main-screen/reducer';
import reducerFavorite from './favorite-screen/reducer';
import reducerOffersList from './offers-list/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  main: reducerMain,
  favorite: reducerFavorite,
  offersList: reducerOffersList,
});
