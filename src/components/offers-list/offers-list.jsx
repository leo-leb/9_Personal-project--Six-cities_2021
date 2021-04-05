import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import OfferCard from '../offer-card/offer-card';
import {typeOffer, typeCardSet} from '../../types';
import {setActiveOffer} from '../../store/root/action';

const OffersList = (props) => {
  const {offers, cardSet} = props;

  const dispatch = useDispatch();

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (activeCard !== null) {
      dispatch(setActiveOffer(offers, activeCard));
    }
  }, [activeCard]);

  return <>
    {offers.map((offer, i) => <OfferCard offer={offer} cardSet={cardSet} setActiveCard={setActiveCard} key={offer + i}/>)}
  </>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(typeOffer),
  cardSet: typeCardSet
};

export default OffersList;
