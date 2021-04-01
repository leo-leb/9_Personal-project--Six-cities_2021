import React from 'react';
import {render} from '@testing-library/react';
import MainContentEmpty from './main-content-empty';

const fakeCity = {
  location: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 10
  },
  name: `Paris`
};

it(`Should MainContentEmpty render correctly`, () => {
  const {container} = render(<MainContentEmpty city={fakeCity}/>);
  expect(container).toMatchSnapshot();
});
