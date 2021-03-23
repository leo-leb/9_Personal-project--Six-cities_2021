import reducerMain from './main-screen/reducer';
import reducerFavorite from './favorite-screen/reducer';
import reducerOffersList from './offers-list/reducer';
import reducerRoot from './root/reducer';
import {combineReducers} from 'redux';
import reducerApp from './app/reducer';

export default combineReducers({
  app: reducerApp,
  main: reducerMain,
  favorite: reducerFavorite,
  offersList: reducerOffersList,
  root: reducerRoot
});
