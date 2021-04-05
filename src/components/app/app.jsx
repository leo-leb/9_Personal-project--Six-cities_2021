import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import {initApp, fetchFavoriteOffers} from "../../store/api-actions";

const App = () => {
  const {isAppReady, authStatus} = useSelector((state) => state.ROOT);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, []);

  if (!isAppReady) {
    return (
      <LoadingScreen />
    );
  }

  if (authStatus === AuthorizationStatus.AUTH) {
    dispatch(fetchFavoriteOffers());
  }

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainScreen />
      </Route>
      <Route exact path={AppRoute.ROOM}>
        <RoomScreen />
      </Route>
      <Route exact path={AppRoute.SIGNIN}>
        <SignInScreen />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => {
          return <FavoritesScreen />;
        }}
      />
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};

export default App;
