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

const cities = [
  {
    name: `Paris`,
    lat: 48.864716,
    lng: 2.349014
  },
  {
    name: `Cologne`,
    lat: 50.935173,
    lng: 6.953101
  },
  {
    name: `Brussels`,
    lat: 50.8505,
    lng: 4.3488
  },
  {
    name: `Amsterdam`,
    lat: 52.377956,
    lng: 4.897070
  },
  {
    name: `Hamburg`,
    lat: 53.551086,
    lng: 9.993682
  },
  {
    name: `Dusseldorf`,
    lat: 51.233334,
    lng: 6.783333
  }
];

export {Routes, stars, city, screenForCardClass, typeOfCards, sizesForImages, cities};
