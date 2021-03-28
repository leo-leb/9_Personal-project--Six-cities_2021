import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Routes} from '../../consts';
import {useSelector, useDispatch} from 'react-redux';

import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

import {initApp} from "../../store/api-actions";
import {fetchFavoriteOffers} from "../../store/api-actions";

const App = () => {
  const {isAppReady, authStatus} = useSelector((state) => state.ROOT);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAppReady) {
      dispatch(initApp());
    }
  }, [isAppReady]);

  useEffect(() => {
    if (authStatus) {
      dispatch(fetchFavoriteOffers());
    }
  }, [authStatus]);

  if (!isAppReady) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.MAIN} exact component={MainScreen}></Route>
        <Route path={Routes.ROOM} exact component={RoomScreen}></Route>
        <Route path={Routes.SIGNIN} exact component={SignInScreen}></Route>
        <PrivateRoute
          path={Routes.FAVORITES}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact component={NotFoundScreen}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
