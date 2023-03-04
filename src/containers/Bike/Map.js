import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./bike.css";

function Bike() {
  const getOwnPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let { longitude } = position.coords; // 經度
        let { latitude } = position.coords; // 緯度
      });
    }
  };

  return (
    <MapContainer
      center={[25.03371, 121.564718]}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        maxZoom={18}
        id="mapbox/streets-v11"
        tileSize={512}
        zoomOffset={-1}
        accessToken="pk.eyJ1IjoiamVzc2ljYWthdGUxMTEwIiwiYSI6ImNsZHZnZnB6ZzBmNW8zcHBjejg4c3VnbGsifQ.my0WIAiUL12bgW8_s0TXZQ"
      />
      <Marker position={[25.03371, 121.564718]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Bike;
