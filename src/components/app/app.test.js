import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import App from './app';
import {AppRoute, AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

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
    "goods": [`Heating`, `Kitchen`, `Cable TV`],
    "host": {
      "avatarUrl": `img/1.png`,
      "id": 3,
      "isPro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "isFavorite": false,
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
    "title": `Beautiful & luxurious studio`,
    "type": `apartment`
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Paris`
    },
    "description": `Behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatarUrl": `img/1.png`,
      "id": 3,
      "isPro": true,
      "name": `Angelina`
    },
    "id": 2,
    "images": [`img/1.png`, `img/2.png`],
    "isFavorite": false,
    "isPremium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "maxAdults": 4,
    "previewImage": `img/1.png`,
    "price": 500,
    "rating": 4.5,
    "title": `Great location`,
    "type": `apartment`
  }
];

const fakeActiveOffer = {
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
  "goods": [`Heating`, `Kitchen`, `Cable TV`],
  "host": {
    "avatarUrl": `img/1.png`,
    "id": 3,
    "isPro": true,
    "name": `Angelina`
  },
  "id": 1,
  "images": [`img/1.png`, `img/2.png`],
  "isFavorite": false,
  "isPremium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "previewImage": `img/1.png`,
  "price": 120,
  "rating": 4.8,
  "title": `Beautiful & luxurious studio`,
  "type": `apartment`
};

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

describe(`Test routing`, () => {
  const history = createMemoryHistory();

  const storeWithAuth = mockStore({
    ROOT: {
      isAppReady: true,
      authStatus: AuthorizationStatus.AUTH,
      activeOffer: fakeActiveOffer
    },
    MAIN: {offers: fakeOffers},
    FAVORITE: {offers: fakeOffers},
    ROOM: {
      nearOffers: fakeOffers,
      reviews: fakeReviews
    }
  });

  const storeWithNoAuth = mockStore({
    ROOT: {
      isAppReady: true,
      authStatus: AuthorizationStatus.NO_AUTH,
      activeOffer: fakeActiveOffer
    },
    MAIN: {offers: fakeOffers},
    FAVORITE: {offers: fakeOffers},
    ROOM: {
      nearOffers: fakeOffers,
      reviews: fakeReviews
    }
  });

  storeWithAuth.dispatch = jest.fn();
  storeWithNoAuth.dispatch = jest.fn();

  it(`Render 'MainScreen' when user navigate to '/' url`, () => {
    render(
        <redux.Provider store={storeWithNoAuth}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Sort by`)).toBeInTheDocument();
    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });

  it(`Render 'RoomScreen' when user navigate to '/offer/id' url`, () => {
    history.push(`/offer/1`);

    render(
        <redux.Provider store={storeWithNoAuth}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(fakeOffers[0].description)).toBeInTheDocument();
    expect(screen.getByText(`Other places in the neighbourhood`)).toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    history.push(AppRoute.SIGNIN);

    render(
        <redux.Provider store={storeWithNoAuth}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'FavoritesScreen' when user navigate to '/favorites' url`, () => {
    history.push(AppRoute.FAVORITES);

    render(
        <redux.Provider store={storeWithAuth}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to unexisting page`, () => {
    history.push(`/asdsadgfdg`);

    render(
        <redux.Provider store={storeWithAuth}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
  });
});
