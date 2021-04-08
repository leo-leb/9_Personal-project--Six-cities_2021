import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import LoadingScreen from './loading-screen';

it(`LoadingScreen should render correctly`, () => {
  const history = createMemoryHistory();

  const {getByText} = render(
      <Router history={history}>
        <LoadingScreen />
      </Router>
  );

  const paragraphElement = getByText(`Loading ...`);

  expect(paragraphElement).toBeInTheDocument();
});
