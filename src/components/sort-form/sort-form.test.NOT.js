import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import SortForm from './sort-form';
import userEvent from '@testing-library/user-event';
// import {AppRoute, AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

it(`SortForm reacts correctly on user event's`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    ROOT: {authStatus: `NO_AUTH`}
  });

  // history.push(AppRoute.SIGNIN);

  render(
      <Provider store={store}>
        <Router history={history}>
          <SortForm />
        </Router>
      </Provider>
  );

  // expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
  // expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

  // userEvent.type(screen.getByTestId(`email`), `test@test.ru`);
  // userEvent.type(screen.getByTestId(`password`), `12345678`);

  // expect(screen.getByDisplayValue(`test@test.ru`)).toBeInTheDocument();
  // expect(screen.getByDisplayValue(`12345678`)).toBeInTheDocument();
});
