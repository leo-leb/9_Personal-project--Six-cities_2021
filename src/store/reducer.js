import {combineReducers} from 'redux';

import reducerMain from './main-screen/reducer';
import reducerFavorite from './favorite-screen/reducer';
import reducerRoom from './room-screen/reducer';
import reducerRoot from './root/reducer';

export default combineReducers({
  main: reducerMain,
  favorite: reducerFavorite,
  room: reducerRoom,
  root: reducerRoot
});
