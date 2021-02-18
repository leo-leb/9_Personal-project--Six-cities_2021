import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const Routes = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  SIGNIN: `/login`,
  ROOM: `/offer/:id?`
};

const App = (props) => {
  const {places} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreen places={places}/>
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen />
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
  places: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default App;
