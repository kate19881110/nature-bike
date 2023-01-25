import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Map() {
  const getMap = () => {
    console.log('1111');
    const mymap = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: '',
      },
    ).addTo(mymap);

    // 標記 icon
    L.marker([51.5, -0.09])
      .addTo(mymap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  };
  useEffect(() => {
    getMap();
  }, []);
  return <div id="map" style={{ height: '100vh', width: '100vw' }} />;
}

export default Map;
