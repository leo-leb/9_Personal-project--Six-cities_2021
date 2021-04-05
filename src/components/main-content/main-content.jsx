import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Map from '../map/map';
import SortForm from '../sort-form/sort-form';
import OffersList from '../offers-list/offers-list';
import {CardSetting} from '../../const';
import {typeOffer, typeCity} from '../../types';

const MainContent = ({city, offers}) => {
  const [filterOffers, setFilteredOffers] = useState([]);

  useEffect(() => {
    setFilteredOffers(offers);
  }, [city]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filterOffers.length} places to stay in {city.name}</b>
        <SortForm offers={offers} onSortClick={setFilteredOffers} city={city}/>
        <div className="cities__places-list places__list tabs__content">
          <OffersList offers={filterOffers} cardSet={CardSetting.MAIN}/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={city}
            points={filterOffers}
          />
        </section>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  city: typeCity,
  offers: PropTypes.arrayOf(typeOffer)
};


export default MainContent;
