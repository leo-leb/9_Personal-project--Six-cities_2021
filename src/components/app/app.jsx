import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Routes} from '../../consts';
import Types from '../../types';
import PropTypes from 'prop-types';

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreen offers={offers.forMainScreen}/>
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen offers={offers.forMainScreen}/>
        </Route>
        <Route exact path={Routes.SIGNIN}>
          <SignInScreen />
        </Route>
        <Route exact path={Routes.ROOM}>
          <RoomScreen reviews={reviews} offers={offers.forRoomScreen}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.objectOf(PropTypes.array),
  reviews: PropTypes.arrayOf(Types.REVIEW)
};

export default App;
