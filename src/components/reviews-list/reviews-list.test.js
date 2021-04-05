import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import ReviewsList from './reviews-list';
import configureStore from 'redux-mock-store';

const fakeReviews = [
  {
    "comment": `A quiet cozy and picturesque.`,
    "date": `2019-04-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatarUrl": `img/1.png`,
      "id": 4,
      "isPro": false,
      "name": `Helen`
    }
  },
  {
    "comment": `That hides behind a river.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 2,
    "rating": 5,
    "user": {
      "avatarUrl": `img/2.png`,
      "id": 4,
      "isPro": true,
      "name": `Max`
    }
  },
  {
    "comment": `Unique lightness of Amsterdam.`,
    "date": `2019-03-08T14:13:56.569Z`,
    "id": 3,
    "rating": 4,
    "user": {
      "avatarUrl": `img/3.png`,
      "id": 4,
      "isPro": false,
      "name": `Joey`
    }
  }
];

const mockStore = configureStore({});
it(`ReviewsList should render correctly`, () => {
  const store = mockStore({
    ROOM: {reviews: fakeReviews}
  });

  const {getByText} = render(
      <Provider store={store}>
        <ReviewsList />
      </Provider>
  );

  const reviewsCounter = getByText(`${fakeReviews.length}`);
  const someReviewText = getByText(`A quiet cozy and picturesque.`);

  expect(reviewsCounter).toBeInTheDocument();
  expect(someReviewText).toBeInTheDocument();
});
