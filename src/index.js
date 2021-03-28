import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from "./services/api";
import {setAuthStatus} from './store/root/action';
import {AuthorizationStatus} from "./consts";

const api = createAPI(
    () => store.dispatch(setAuthStatus(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
