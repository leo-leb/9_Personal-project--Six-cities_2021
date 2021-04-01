import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import BadRequest from './components/bad-request/bad-request';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from "./services/api";
import {setAuthStatus, redirectToRoute} from './store/root/action';
import {AuthorizationStatus, AppRoutes, ApiCodes} from "./consts";
import {redirect} from "./store/middlewares/redirect";
import browserHistory from "./browser-history";

const reactByModalWindow = (code) => {
  ReactDOM.render(
      <BrowserRouter history={browserHistory}>
        <BadRequest code={code}/>
      </BrowserRouter>,
      document.querySelector(`#modal`)
  );
};

const api = createAPI(
    (parameter) => {
      switch (parameter) {
        case ApiCodes.BAD_REQUEST.number:
          reactByModalWindow(ApiCodes.BAD_REQUEST);
          break;
        case ApiCodes.UNAUTHORIZED.number:
          store.dispatch(setAuthStatus(AuthorizationStatus.NO_AUTH));
          break;
        case ApiCodes.NOT_FOUND.number:
          store.dispatch(redirectToRoute(AppRoutes.NOT_FOUND));
          break;
        case ApiCodes.NOT_AVAILABLE.number:
          reactByModalWindow(ApiCodes.NOT_AVAILABLE);
          break;
      }
    }
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
