import React from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import leaflet from 'leaflet';

import mapMarker from '../../assets/images/map-marker.svg';

import styles from './map.module.scss';
import 'leaflet/dist/leaflet.css';

const CITIES_COORDINATES = [
  {
    name: 'moscow',
    lat: 55.752696619704075,
    lng: 37.6326487652558,
  },
  {
    name: 'saratov',
    lat: 51.5483504993771,
    lng: 46.00724280114316,
  },
  {
    name: 'kazan',
    lat: 55.79363900194767,
    lng: 49.096631117725316,
  },
  {
    name: 'tumen',
    lat: 57.17549965064077,
    lng: 65.53609728323084,
  },
  {
    name: 'omsk',
    lat: 55.00030748989224,
    lng: 73.33720979275391,
  },
  {
    name: 'surgut',
    lat: 61.28042943890347,
    lng: 73.42197513293047,
  },
  {
    name: 'novosibirsk',
    lat: 55.10910174318264,
    lng: 82.84579559980743,
  },
  {
    name: 'perm',
    lat: 58.198301586564966,
    lng: 56.60213136684948,
  },
  {
    name: 'ekaterinburg',
    lat: 57.044011912869315,
    lng: 59.97764425148872,
  },
  {
    name: 'chelabinsk',
    lat: 55.28309198095774,
    lng: 61.50466449612494,
  },
];

const MARKER_SIZE = {
  WIDTH: 35,
  HEIGHT: 40,
};

const DEFAULT_ZOOM = 5;
const DEFAULT_POSITION = {
  LAT: 56.2,
  LNG: 57.1,
};

const markerIcon = new leaflet.Icon({
  iconUrl: mapMarker,
  iconSize: [MARKER_SIZE.WIDTH, MARKER_SIZE.HEIGHT],
  iconAnchor: [MARKER_SIZE.WIDTH / 2, MARKER_SIZE.HEIGHT],
});

function Map() {
  return (
    <section className={styles.section} id="map">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Отделения Лига Банка
        </h2>
        <MapContainer
          className={styles.map}
          center={[DEFAULT_POSITION.LAT, DEFAULT_POSITION.LNG]}
          zoom={DEFAULT_ZOOM}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {CITIES_COORDINATES.map((position) =>
            <Marker key={position.name} position={[position.lat, position.lng]} icon={markerIcon} />,
          )}
        </MapContainer>
      </div>
    </section>
  );
}

export default Map;
