import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import reducer from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
