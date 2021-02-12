import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES: [1, 2, 3, 4, 5]
};

ReactDOM.render(
    <App
      places={Setting.PLACES}
    />,
    document.querySelector(`#root`)
);
