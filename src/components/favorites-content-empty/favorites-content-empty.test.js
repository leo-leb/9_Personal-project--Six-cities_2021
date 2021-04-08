import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import FavoritesContentEmpty from './favorites-content-empty';

it(`FavoritesContentEmpty should render correctly`, () => {
  const history = createMemoryHistory();

  const {getByText} = render(
      <Router history={history}>
        <FavoritesContentEmpty />
      </Router>
  );

  const headerElement = getByText(`Favorites (empty)`);
  const paragraphElement = getByText(`Save properties to narrow down search or plan your future trips.`);

  expect(headerElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
