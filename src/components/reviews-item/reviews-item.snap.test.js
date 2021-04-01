import React from 'react';
import {render} from '@testing-library/react';
import ReviewsItem from './reviews-item';

const fakeReview = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
};

it(`Should MainContentEmpty render correctly`, () => {
  const {container} = render(<ReviewsItem review={fakeReview}/>);
  expect(container).toMatchSnapshot();
});
