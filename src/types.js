import PropTypes from 'prop-types';

const Types = {
  OFFERS: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })).isRequired,
  OFFER: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })).isRequired
};

export default Types;
