const Routes = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  SIGNIN: `/login`,
  ROOM: `/offer/:id?`
};

const city = {
  lat: 52.38333,
  lng: 4.9,
  zoom: 12
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

export {Routes, stars, city, screenForCardClass, typeOfCards, sizesForImages};
