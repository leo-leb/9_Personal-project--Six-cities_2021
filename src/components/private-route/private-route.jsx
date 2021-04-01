import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoutes, AuthorizationStatus} from '../../consts';

const PrivateRoute = ({render, path, exact}) => {
  const {authStatus} = useSelector((state) => state.ROOT);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoutes.SIGNIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
