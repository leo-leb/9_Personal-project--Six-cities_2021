import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './action';
import reducerRoot from './reducer';
import {checkAuth, login} from '../api-actions';
import {ApiRoutes, AppRoutes, AuthorizationStatus} from '../../consts';

const api = createAPI(() => {});

const offer = {
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
};

describe(`Reducer 'reducerRoot' should work correctly`, () => {
  it(`WITHOUT PARAMETERS: return initial state`, () => {
    expect(reducerRoot(undefined, {}))
      .toEqual({
        isAppReady: false,
        authStatus: AuthorizationStatus.NO_AUTH,
        activeOffer: {}
      });
  });

  it(`UPDATE STATE: update appStatus to 'true'`, () => {
    const state = {isAppReady: false};
    const setAppReady = {
      type: ActionType.SET_APP_READY,
      payload: true
    };

    expect(reducerRoot(state, setAppReady))
      .toEqual({isAppReady: true});
  });

  it(`UPDATE STATE: update authorizationStatus to 'auth'`, () => {
    const state = {authStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.SET_AUTH_STATUS,
      payload: AuthorizationStatus.AUTH
    };

    expect(reducerRoot(state, requiredAuthorizationAction))
      .toEqual({authStatus: AuthorizationStatus.AUTH});
  });

  it(`UPDATE STATE: update activeOffer to new activeOffer`, () => {
    const state = {activeOffer: {}};
    const setActiveOffer = {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: offer
    };

    expect(reducerRoot(state, setActiveOffer))
      .toEqual({activeOffer: offer});
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
      .onGet(ApiRoutes.LOGIN)
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
      .onPost(ApiRoutes.LOGIN)
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
          payload: AppRoutes.MAIN
        });
      });
  });
});
