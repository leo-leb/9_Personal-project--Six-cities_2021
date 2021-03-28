import {combineReducers} from 'redux';

import reducerMain from './main-screen/reducer';
import reducerFavorite from './favorite-screen/reducer';
import reducerRoom from './room-screen/reducer';
import reducerRoot from './root/reducer';

export const NameSpace = {
  MAIN: `MAIN`,
  FAVORITE: `FAVORITE`,
  ROOM: `ROOM`,
  ROOT: `ROOT`
};

export default combineReducers({
  [NameSpace.MAIN]: reducerMain,
  [NameSpace.FAVORITE]: reducerFavorite,
  [NameSpace.ROOM]: reducerRoom,
  [NameSpace.ROOT]: reducerRoot
});
