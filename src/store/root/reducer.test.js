/* eslint-disable max-nested-callbacks */
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {setAppReady, setAuthStatus, setActiveOffer} from './action';
import {ActionType} from './action';
import {ActionType as ActionTypeMain} from '../main-screen/action';
import {ActionType as ActionTypeFavorite} from '../favorite-screen/action';
import reducerRoot from './reducer';
import {checkAuth, login, setFavoriteStatus, fetchAllOffers, fetchFavoriteOffers} from '../api-actions';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../../const';

const api = createAPI(() => {});

const fakeId = 2;

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
    "description": `Behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`],
    "host": {
      "avatarUrl": `img/1.png`,
      "id": 3,
      "isPro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "isFavorite": true,
    "isPremium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "maxAdults": 4,
    "previewImage": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious`,
    "type": `apartment`
  },
  {
    "bedrooms": 1,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque.`,
    "goods": [`Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatarUrl": `img/1.png`,
      "id": 2,
      "isPro": true,
      "name": `Max`
    },
    "id": 2,
    "images": [`img/1.png`, `img/2.png`],
    "isFavorite": true,
    "isPremium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "maxAdults": 4,
    "previewImage": `img/2.png`,
    "price": 400,
    "rating": 5,
    "title": `Great location`,
    "type": `room`
  }
];

const fakeOffer = fakeOffers[1];

describe(`Reducer 'reducerRoot' should work correctly`, () => {
  it(`WITHOUT PARAMETERS: return initial state`, () => {
    const newState = reducerRoot(undefined, {});

    expect(newState)
      .toEqual({
        isAppReady: false,
        authStatus: AuthorizationStatus.NO_AUTH,
        activeOffer: {}
      });
  });

  it(`UPDATE STATE: update appStatus to 'true'`, () => {
    const state = {isAppReady: false};
    const action = setAppReady(true);
    const newState = reducerRoot(state, action);

    expect(newState).toEqual({isAppReady: true});
  });

  it(`UPDATE STATE: update authorizationStatus to 'auth'`, () => {
    const state = {authStatus: AuthorizationStatus.NO_AUTH};
    const action = setAuthStatus(AuthorizationStatus.AUTH);
    const newState = reducerRoot(state, action);

    expect(newState).toEqual({authStatus: AuthorizationStatus.AUTH});
  });

  it(`UPDATE STATE: update activeOffer to new activeOffer`, () => {
    const state = {activeOffer: {}};
    const action = setActiveOffer(fakeOffers, fakeId);
    const newState = reducerRoot(state, action);

    expect(newState).toEqual({activeOffer: fakeOffer});
  });
});

describe(`Async operation work correctly`, () => {
  it(`CHECK API CALL:
    -> get from /login
    -> check authorisation`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_STATUS,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`CHECK API CALL:
    -> post to /login
    -> check authorisation
    -> check redirect`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `12345678`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_STATUS,
          payload: AuthorizationStatus.AUTH
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN
        });
      });
  });

  it(`CHECK API CALL:
  -> post to /favorite/id/status
  -> get from /hotels
  -> get from /favorite`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeStatus = 1;
    const checkSetFavoriteStatus = setFavoriteStatus(fakeId, fakeStatus);
    const checkGetOffers = fetchAllOffers();
    const checkGetFavoriteOffers = fetchFavoriteOffers();

    apiMock
      .onPost(ApiRoute.FAVORITE_OFFERS + `/${fakeId}` + `/${fakeStatus}`)
      .reply(200, [{fake: true}])
      .onGet(ApiRoute.ALL_OFFERS)
      .reply(200, [{fake: true}])
      .onGet(ApiRoute.FAVORITE_OFFERS)
      .reply(200, [{fake: true}]);

    return checkSetFavoriteStatus(dispatch, () => {}, api)
      .then(() => {
        checkGetOffers(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(3);
            expect(dispatch).toHaveBeenNthCalledWith(3, {
              type: ActionTypeMain.LOAD_OFFERS,
              payload: [{fake: true}]
            });
          });
      })
      .then(() => {
        checkGetFavoriteOffers(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(4);
            expect(dispatch).toHaveBeenNthCalledWith(4, {
              type: ActionTypeFavorite.LOAD_OFFERS,
              payload: [{fake: true}]
            });
          });
      });
  });

  it(`CHECK API CALL:
  -> get from /login
  -> check authorisation
  -> get from /hotels
  -> update appStatus to 'true'`, () => {

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const checkAuthLoader = checkAuth();
    const checkGetOffers = fetchAllOffers();

    const state = {isAppReady: false};
    const action = setAppReady(true);
    const newState = reducerRoot(state, action);

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, [{fake: true}])
      .onGet(ApiRoute.ALL_OFFERS)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_AUTH_STATUS,
        payload: AuthorizationStatus.AUTH
      });
    })
    .then(() => {
      checkGetOffers(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionTypeMain.LOAD_OFFERS,
            payload: [{fake: true}]
          });
        });
    })
    .then(
        expect(newState).toEqual({isAppReady: true})
    );
  });
});
