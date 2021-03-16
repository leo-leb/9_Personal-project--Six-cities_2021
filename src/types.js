import PropTypes from 'prop-types';

const Types = {
  OFFER: PropTypes.shape({
    id: PropTypes.number.isRequired,
    host: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    is_premium: PropTypes.bool.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    max_adults: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    preview_image: PropTypes.string.isRequired,
    city: PropTypes.object.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    })
  }),
  REVIEW: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.shape({
      day: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired
    })
  }).isRequired,
  IMAGE: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }),
  CITY: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    })
  }),
};

export default Types;
