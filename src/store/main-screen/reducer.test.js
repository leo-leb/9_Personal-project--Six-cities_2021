import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {loadAllOffers} from './action';
import {ActionType} from './action';
import reducerMain from './reducer';
import {fetchAllOffers} from '../api-actions';
import {ApiRoute} from '../../const';

const api = createAPI(() => {});

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

describe(`Reducer 'reducerMain' should work correctly`, () => {
  it(`WITHOUT PARAMETERS: return initial state`, () => {
    expect(reducerMain(undefined, {}))
      .toEqual({offers: []});
  });

  it(`UPDATE STATE: update offers to new offers`, () => {
    const state = {offers: []};
    const action = loadAllOffers(fakeOffers);
    const newState = reducerMain(state, action);

    expect(newState).toEqual({offers: fakeOffers});
  });
});

describe(`Async operation work correctly`, () => {
  it(`CHECK API CALL: get from /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkGetOffers = fetchAllOffers();

    apiMock
      .onGet(ApiRoute.ALL_OFFERS)
      .reply(200, [{fake: true}]);

    return checkGetOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}]
        });
      });
  });
});
