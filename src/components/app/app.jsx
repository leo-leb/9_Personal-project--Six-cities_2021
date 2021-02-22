import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Routes} from '../../consts';
import Types from '../../types';

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreen offers={offers}/>
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route exact path={Routes.SIGNIN}>
          <SignInScreen />
        </Route>
        <Route exact path={Routes.ROOM}>
          <RoomScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: Types.OFFERS
};

export default App;
