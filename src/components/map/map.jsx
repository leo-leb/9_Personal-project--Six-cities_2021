import React from 'react';
import leaflet from 'leaflet';
import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Types from '../../types';

import "leaflet/dist/leaflet.css";

const Map = ({city, points}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.lat,
        lng: city.lng
      },
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.location.lat,
        lng: point.location.lng
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.type);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return <>
    <div id="map" style={{width: `100%`, height: `100%`}} ref={mapRef}></div>
  </>;
};

Map.propTypes = {
  city: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  points: PropTypes.arrayOf(Types.OFFER)
};

export default Map;
