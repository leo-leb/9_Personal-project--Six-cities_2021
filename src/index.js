import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import browserHistory from "./browser-history";
import App from './components/app/app';
import ModalWindow from './components/modal-window/modal-window';
import mainReducer from './store/main-reducer';
import {createAPI} from "./services/api";
import {redirect} from "./store/middlewares/redirect";
import {setAuthStatus, redirectToRoute} from './store/root/action';
import {AuthorizationStatus, AppRoute, ApiCode} from "./const";

const reactByModalWindow = (code) => {
  ReactDOM.render(
      <BrowserRouter history={browserHistory}>
        <ModalWindow code={code}/>
      </BrowserRouter>,
      document.querySelector(`#modal`)
  );
};

const api = createAPI(
    (parameter) => {
      switch (parameter) {
        case ApiCode.BAD_REQUEST.number:
          reactByModalWindow(ApiCode.BAD_REQUEST);
          break;
        case ApiCode.UNAUTHORIZED.number:
          store.dispatch(setAuthStatus(AuthorizationStatus.NO_AUTH));
          break;
        case ApiCode.NOT_FOUND.number:
          store.dispatch(redirectToRoute(AppRoute.NOT_FOUND));
          break;
        case ApiCode.NOT_AVAILABLE.number:
          reactByModalWindow(ApiCode.NOT_AVAILABLE);
          break;
        case ApiCode.NETWORK_ERROR.name:
          reactByModalWindow(ApiCode.NETWORK_ERROR);
          break;
      }
    }
);

const store = configureStore({
  reducer: mainReducer,
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
