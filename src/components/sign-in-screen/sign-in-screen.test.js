import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import SignInScreen from './sign-in-screen';
import userEvent from '@testing-library/user-event';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

it(`Render SignInScreen when user navigate to 'login' with url`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    ROOT: {authStatus: AuthorizationStatus.NO_AUTH}
  });

  // history.push(AppRoute.SIGNIN);

  render(
      <Provider store={store}>
        <Router history={history}>
          <SignInScreen />
        </Router>
      </Provider>
  );

  expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
  expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `test@test.ru`);
  userEvent.type(screen.getByTestId(`password`), `12345678`);

  expect(screen.getByDisplayValue(`test@test.ru`)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`12345678`)).toBeInTheDocument();
});
