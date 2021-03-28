import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import {getAuthStatus} from '../../store/root/selectors';

const PrivateRoute = ({render, path, exact, authStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

PrivateRoute.propTypes = {
  authStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
