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
        <Route path={Routes.MAIN} exact component={MainScreen}></Route>
        <Route path={Routes.FAVORITES} exact component={FavoritesScreen}></Route>
        <Route path={Routes.ROOM} exact component={RoomScreen}></Route>
        <Route path={Routes.SIGNIN} exact component={SignInScreen}></Route>
        <Route exact component={NotFoundScreen}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
