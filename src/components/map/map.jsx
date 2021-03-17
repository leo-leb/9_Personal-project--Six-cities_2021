import React from 'react';
import leaflet from 'leaflet';
import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Types from '../../types';
import {connect} from 'react-redux';

import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {city, points, activeCard} = props;

  const mapRef = useRef();

  const basicIcon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  });

  const activeIcon = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [27, 39]
  });

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: 12,
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  useEffect(() => {
    const markers = [];

    if (activeCard) {
      points.forEach((offer) => {
        const icon = offer.id === activeCard.id ? activeIcon : basicIcon;

        markers.push(
            leaflet
              .marker({
                lat: offer.location.latitude,
                lng: offer.location.longitude
              }, {icon})
              .addTo(mapRef.current)
              .bindPopup(offer.type)
        );

        const activeIconElement = document.querySelector(`img[src="img/pin-active.svg"]`);

        if (activeIconElement) {
          activeIconElement.style.zIndex = 1010;
        }
      });
    } else {
      points.forEach((offer) => {
        const icon = basicIcon;

        markers.push(
            leaflet
              .marker({
                lat: offer.location.latitude,
                lng: offer.location.longitude
              }, {icon})
              .addTo(mapRef.current)
              .bindPopup(offer.type)
        );

        const activeIconElement = document.querySelector(`img[src="img/pin-active.svg"]`);

        if (activeIconElement) {
          activeIconElement.style.zIndex = 1010;
        }
      });
    }

    return () => {
      markers.forEach((marker) => mapRef.current.removeLayer(marker));
    };
  }, [city, points, activeCard]);

  return <>
    <div id="map" style={{width: `100%`, height: `100%`}} ref={mapRef}></div>
  </>;
};

const mapStateToProps = (state) => ({
  activeCard: state.offersList.activeOfferCard
});

Map.propTypes = {
  city: Types.CITY,
  points: PropTypes.arrayOf(Types.OFFER),
  activeCard: PropTypes.object
};

export {Map};
export default connect(mapStateToProps)(Map);
