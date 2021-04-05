/* eslint-disable max-nested-callbacks */
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {loadReviews, loadNearOffers} from './action';
import {ActionType} from './action';
import reducerRoom from './reducer';
import {fetchReviews, fetchNearOffers, postReview} from '../api-actions';
import {ApiRoute} from '../../const';

const api = createAPI(() => {});

const fakeReviews = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }
];

const fakeOffers = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  }
];

const id = 10;

describe(`Reducer 'reducerRoom' should work correctly`, () => {
  it(`WITHOUT PARAMETERS: return initial state`, () => {
    expect(reducerRoom(undefined, {}))
      .toEqual({
        reviews: [],
        nearOffers: []
      });
  });

  it(`UPDATE STATE: update reviews to new reviews`, () => {
    const state = {reviews: []};
    const action = loadReviews(fakeReviews);
    const newState = reducerRoom(state, action);

    expect(newState).toEqual({reviews: fakeReviews});
  });

  it(`UPDATE STATE: update offers to new offers`, () => {
    const state = {nearOffers: []};
    const action = loadNearOffers(fakeOffers);
    const newState = reducerRoom(state, action);

    expect(newState).toEqual({nearOffers: fakeOffers});
  });
});

describe(`Async operation work correctly`, () => {
  it(`CHECK API CALL: get from /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkReviewsLoader = fetchReviews(id);

    apiMock
      .onGet(ApiRoute.REVIEWS + `/${id}`)
      .reply(200, [{fake: true}]);

    return checkReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}]
        });
      });
  });

  it(`CHECK API CALL: get from /nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkOffersLoader = fetchNearOffers(id);

    apiMock
      .onGet(ApiRoute.ALL_OFFERS + `/${id}` + ApiRoute.NEAR_OFFERS)
      .reply(200, [{fake: true}]);

    return checkOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_OFFERS,
          payload: [{fake: true}]
        });
      });
  });

  it(`CHECK API CALL:
  -> post to /comments
  -> get from /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;
    const fakeReview = {
      "comment": `bla-bla-bla`,
      "rating": 4
    };

    const checkPostReview = postReview(fakeId, fakeReview);
    const checkReviewsLoader = fetchReviews(fakeId);

    apiMock
      .onPost(ApiRoute.REVIEWS + `/${fakeId}`)
      .reply(200, [{fake: true}])
      .onGet(ApiRoute.REVIEWS + `/${fakeId}`)
      .reply(200, [{fake: true}]);

    return checkPostReview(dispatch, () => {}, api)
      .then(() => {
        checkReviewsLoader(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: ActionType.LOAD_REVIEWS,
              payload: [{fake: true}]
            });
          });
      });
  });
});
