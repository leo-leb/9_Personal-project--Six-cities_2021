const Routes = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  SIGNIN: `/login`,
  ROOM: `/offer/:id?`
};

const city = {
  lat: 52.38333,
  lng: 4.9,
};

const screenForCardClass = {
  MAIN: `cities`,
  ROOM: `near-places`,
  FAVORITES: `favorites`,
};

const typeOfCards = {
  PlaceCard: `place-card`,
  Card: `card`
};

const sizesForImages = {
  SMALL: {
    width: `150`,
    height: `110`
  },
  BIG: {
    width: `260`,
    height: `200`
  }
};

const stars = [`5`, `4`, `3`, `2`, `1`];

const starsRate = (rate) => {
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

const cities = [
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

const defaultStates = {
  MAIN: cities[0]
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export {Routes, stars, city, starsRate, screenForCardClass, typeOfCards, sizesForImages, cities, defaultStates, AuthorizationStatus};
