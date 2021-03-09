import PropTypes from 'prop-types';

const Types = {
  OFFER: PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    smallImage: PropTypes.string.isRequired,
    bigImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    })
  }).isRequired,
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
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

export default Types;
