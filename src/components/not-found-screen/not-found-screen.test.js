import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import NotFoundScreen from './not-found-screen';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore();

it(`NotFoundScreen should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    ROOT: {authStatus: AuthorizationStatus.AUTH}
  });

  const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundScreen />
        </Router>
      </Provider>
  );

  const headerElement = getByText(`404. Page not found`);
  const linkElement = getByText(`Вернуться на главную`);

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
