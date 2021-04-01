import React from 'react';
import leaflet from 'leaflet';
import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import Types from '../../types';

import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {city, points, actualPoint} = props;
  const {activeOffer} = useSelector((state) => state.ROOT);

  const id = activeOffer ? activeOffer.id : null;

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

    if (actualPoint) {
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
      });

      const icon = activeIcon;

      markers.push(
          leaflet
            .marker({
              lat: actualPoint.location.latitude,
              lng: actualPoint.location.longitude
            }, {icon})
            .addTo(mapRef.current)
            .bindPopup(actualPoint.type)
      );
    } else {
      points.forEach((offer) => {
        const icon = offer.id === activeOffer.id ? activeIcon : basicIcon;

        markers.push(
            leaflet
              .marker({
                lat: offer.location.latitude,
                lng: offer.location.longitude
              }, {icon})
              .addTo(mapRef.current)
              .bindPopup(offer.type)
        );
      });
    }

    return () => {
      markers.forEach((marker) => mapRef.current.removeLayer(marker));
    };
  }, [city, points, id]);

  return <>
    <div id="map" style={{width: `100%`, height: `100%`}} ref={mapRef}></div>
  </>;
};

Map.propTypes = {
  city: Types.CITY,
  points: PropTypes.arrayOf(Types.OFFER),
  actualPoint: Types.OFFER
};

export default Map;
