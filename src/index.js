import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import reducer from './store/reducer';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from './store/main-screen/action';
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./consts";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
