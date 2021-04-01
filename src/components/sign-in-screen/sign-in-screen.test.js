import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignInScreen from './sign-in-screen';

const mockStore = configureStore({});

it(`Render 'SignInScreen' when user navigate to '/login' url`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SignInScreen />
        </Router>
      </Provider>
  );

  expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `name@mail.ru`);
  userEvent.type(screen.getByTestId(`password`), `12345678`);

  expect(screen.getByDisplayValue(/name@mail.ru/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/12345678/i)).toBeInTheDocument();
});
