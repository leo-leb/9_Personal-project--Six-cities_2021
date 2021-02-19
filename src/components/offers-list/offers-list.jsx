import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

const OffersList = (props) => {
  const {offers} = props;

  return <React.Fragment>
    {offers.map((offer, i) => <OfferCard key={offer + i} offer={offer}/>)}
  </React.Fragment>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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

export default OffersList;
