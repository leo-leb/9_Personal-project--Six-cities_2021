import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Routes} from '../../consts';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreen />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path={Routes.ROOM}>
          <RoomScreen />
        </Route>
        <Route exact path={Routes.SIGNIN}>
          <SignInScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
