import {getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate} from './selectors';

export const AppRoutes = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  SIGNIN: `/login`,
  ROOM: `/offer/:id?`,
  NOT_FOUND: `/page-not-found`,
  BAD_REQUEST: `/bad-request`
};

export const ApiRoutes = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  ALL_OFFERS: `/hotels`,
  FAVORITE_OFFERS: `/favorite`,
  NEAR_OFFERS: `/nearby`,
  REVIEWS: `/comments`
};

export const settingsForCard = {
  MAIN: {
    screen: `cities`,
    card: `place-card`,
    image: {
      width: `260`,
      height: `200`
    }
  },
  ROOM: {
    screen: `near-places`,
    card: `card`,
    image: {
      width: `260`,
      height: `200`
    }
  },
  FAVORITES: {
    screen: `favorites`,
    card: `card`,
    image: {
      width: `150`,
      height: `110`
    }
  }
};

export const stars = [`5`, `4`, `3`, `2`, `1`];

export const starsRate = (rate) => {
  switch (rate) {
    case 5:
      return `100%`;
    case 4:
      return `80%`;
    case 3:
      return `60%`;
    case 2:
      return `40%`;
    case 1:
      return `20%`;
    default:
      return null;
  }
};

export const cities = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10
    },
    name: `Paris`
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10
    },
    name: `Cologne`
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10
    },
    name: `Brussels`
  },
  {
    location: {
      latitude: 52.377956,
      longitude: 4.897070,
      zoom: 10
    },
    name: `Amsterdam`
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10
    },
    name: `Hamburg`
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10
    },
    name: `Dusseldorf`
  }
];

export const filters = [
  {
    name: `Popular`,
    action: (offers) => {
      return offers;
    }
  },
  {
    name: `Price: low to high`,
    action: (offers) => {
      return getFilteredOffersByPriceIncrease(offers);
    }
  },
  {
    name: `Price: high to low`,
    action: (offers) => {
      return getFilteredOffersByPriceReduce(offers);
    }
  },
  {
    name: `Top rated first`,
    action: (offers) => {
      return getFilteredOffersByRate(offers);
    }
  }
];

export const defaultStates = {
  MAIN: cities[0]
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const FavoriteButtonTypes = {
  OFFER_CARD: {
    name: `place-card`,
    width: 18,
    height: 19
  },
  ROOM_SCREEN: {
    name: `property`,
    width: 31,
    height: 33
  },
};

export const ApiCodes = {
  BAD_REQUEST: {
    number: 400,
    description: `Bad request`
  },
  UNAUTHORIZED: {
    number: 401,
    description: `User is unauthorized`
  },
  NOT_FOUND: {
    number: 404,
    description: `Page not found`
  },
  NOT_AVAILABLE: {
    number: 500,
    description: `Server is not available`
  }
};
