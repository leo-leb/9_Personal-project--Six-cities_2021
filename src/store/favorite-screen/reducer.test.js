import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './action';
import reducerFavorites from './reducer';
import {fetchFavoriteOffers} from '../api-actions';
import {ApiRoutes} from '../../consts';

const api = createAPI(() => {});

const offers = [
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

describe(`Reducer 'reducerFavorites' should work correctly`, () => {
  it(`WITHOUT PARAMETERS: return initial state`, () => {
    expect(reducerFavorites(undefined, {}))
      .toEqual({offers: []});
  });

  it(`UPDATE STATE: update offers to new offers`, () => {
    const state = {offers: []};
    const loadFavoriteOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };

    expect(reducerFavorites(state, loadFavoriteOffersAction))
      .toEqual({offers});
  });
});

describe(`Async operation work correctly`, () => {
  it(`CHECK API CALL: get from /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkGetFavoriteOffers = fetchFavoriteOffers();

    apiMock
      .onGet(ApiRoutes.FAVORITE_OFFERS)
      .reply(200, [{fake: true}]);

    return checkGetFavoriteOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}]
        });
      });
  });
});
