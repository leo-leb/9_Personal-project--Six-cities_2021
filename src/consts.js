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

const stars = [`5`, `4`, `3`, `2`, `1`];

export {Routes, stars, city};
