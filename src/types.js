import PropTypes from 'prop-types';

export const typeOffer = PropTypes.shape({
  id: PropTypes.number.isRequired,
  host: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  goods: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  previewImage: PropTypes.string.isRequired,
  city: PropTypes.object.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  })
});

export const typeReview = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
}).isRequired;

export const typeImage = PropTypes.shape({
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
});

export const typeCity = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  })
});

export const typeCardSet = PropTypes.shape({
  screen: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  image: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  })
});
