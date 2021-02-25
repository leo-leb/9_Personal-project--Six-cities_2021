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

const cardsClass = {
  MainScreen: `cities`,
  RoomScreen: `near-places`,
  FavoritesScreen: `favorites`
};

const pages = {
  MainScreen: `main`,
  RoomScreen: `room`,
  FavoritesScreen: `favorites`,
};

const stars = [`5`, `4`, `3`, `2`, `1`];

export {Routes, stars, city, cardsClass, pages};
