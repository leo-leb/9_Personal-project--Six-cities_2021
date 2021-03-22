import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Routes} from '../../consts';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// import Types from '../../types';
import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {initApp} from "../../store/api-actions";

const App = (props) => {
  const {isAppReady, onInitApp} = props;

  useEffect(() => {
    if (!isAppReady) {
      onInitApp();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return (
      <LoadingScreen />
    );
  }

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

const mapStateToProps = (state) => ({
  isAppReady: state.root.isAppReady,
  // offers: state.main.offers
});

const mapDispatchToProps = (dispatch) => ({
  onInitApp() {
    dispatch(initApp());
  }
});

App.propTypes = {
  // offers: PropTypes.arrayOf(Types.OFFER),
  isAppReady: PropTypes.bool.isRequired,
  onInitApp: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
