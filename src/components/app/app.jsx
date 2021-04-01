import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {initApp, fetchFavoriteOffers} from "../../store/api-actions";
import {AppRoutes} from '../../consts';

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

  return (
    <Switch>
      <Route path={AppRoutes.MAIN} exact component={MainScreen}></Route>
      <Route path={AppRoutes.ROOM} exact component={RoomScreen}></Route>
      <Route path={AppRoutes.SIGNIN} exact component={SignInScreen}></Route>
      <PrivateRoute
        path={AppRoutes.FAVORITES}
        render={() => <FavoritesScreen />}
      >
      </PrivateRoute>
      <Route exact component={NotFoundScreen}></Route>
    </Switch>
  );
};

export default App;
