import React from 'react';
import leaflet from 'leaflet';
import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Types from '../../types';

import "leaflet/dist/leaflet.css";

const Map = ({city, points}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.lat,
        lng: city.lng
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
    setMap(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) {
      return () => {
      };
    }
    const markers = points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      return leaflet.marker({
        lat: point.location.lat,
        lng: point.location.lng
      },
      {
        icon: customIcon
      })
      .addTo(map)
      .bindPopup(point.type);
    });
    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [city, points]);

  return <>
    <div id="map" style={{width: `100%`, height: `100%`}} ref={mapRef}></div>
  </>;
};

// const Map = ({city, points}) => {
//   const mapRef = useRef();

//   useEffect(() => {
//     mapRef.current = leaflet.map(`map`, {
//       center: {
//         lat: city.lat,
//         lng: city.lng
//       },
//       zoom: 12,
//       zoomControl: false,
//       marker: true
//     });

//     let container = leaflet.DomUtil.get(`map`);

//     if (container !== null) {
//       container._leaflet_id = null;
//     }

//     leaflet
//       .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
//         attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
//       })
//       .addTo(mapRef.current);

//     points.forEach((point) => {
//       const customIcon = leaflet.icon({
//         iconUrl: `img/pin.svg`,
//         iconSize: [30, 30]
//       });

//       leaflet.marker({
//         lat: point.location.lat,
//         lng: point.location.lng
//       },
//       {
//         icon: customIcon
//       })
//       .addTo(mapRef.current)
//       .bindPopup(point.type);

//       return () => {
//         mapRef.current.remove();
//       };
//     });
//   }, [city]);

  return <>
    <div id="map" style={{width: `100%`, height: `100%`}} ref={mapRef}></div>
  </>;
};

Map.propTypes = {
  city: Types.CITY,
  points: PropTypes.arrayOf(Types.OFFER)
};

export default Map;
