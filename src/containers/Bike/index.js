import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";

import {
  GPS_SVG,
  stationSVG,
  rentEmptyStationSVG,
  returnEmptyStationSVG,
  MarkerClusterIcon,
} from "./Icon";
// import Loading from "../Loading";

function StationMarker({ item, isActive, map }) {
  const [refReady, setRefReady] = useState(false);
  let popupRef = useRef(null);
  useEffect(() => {
    if (refReady && isActive) {
      popupRef.openOn(map);
    }
  }, [refReady, isActive, map]);

  return (
    <Marker
      key={item.StationUID}
      position={[
        item.StationPosition.PositionLat,
        item.StationPosition.PositionLon,
      ]}
      icon={
        item.AvailableRentBikes === 0
          ? rentEmptyStationSVG
          : item.AvailableReturnBikes === 0
          ? returnEmptyStationSVG
          : stationSVG
      }
      title={item.StationName.Zh_tw}
      alt={item.StationName.Zh_tw}
    >
      <Popup
        offset={[0, -10]}
        ref={(r) => {
          popupRef = r;
          setRefReady(true);
        }}
      >
        <h3 className="fs-6">{item.StationName.Zh_tw}</h3>
        <p className="fs-6 mt-2 mb-0">
          可租借：
          <span className={item.AvailableRentBikes === 0 ? "text-danger" : ""}>
            {item.AvailableRentBikes}
          </span>
          <br />
          停車位：
          <span
            className={item.AvailableReturnBikes === 0 ? "text-danger" : ""}
          >
            {item.AvailableReturnBikes}
          </span>
        </p>
      </Popup>
      <Tooltip offset={[-1, -8]} direction="center" opacity={1} permanent>
        <span className="position-absolute top-50 start-50 translate-middle rentNum">
          {item.AvailableRentBikes.toString()}
        </span>
        <span
          className={`position-absolute top-50 start-50 translate-middle returnNum ${
            item.AvailableReturnBikes === 0 ? "zero" : null
          }`}
        >
          {item.AvailableReturnBikes.toString()}
        </span>
      </Tooltip>
    </Marker>
  );
}

export default function Map({
  index,
  map,
  setMap,
  zoom,
  position,
  nearby,
  nearbyStations = [],
//   loading
}) {

  useEffect(() => {
    const delay = setTimeout(() => {
      if (index === "noIndex") {
        map.setView(nearby.split(','), zoom);
      } else {
        map.setView(position.split(','), zoom);
      }
    }, 0);
    return () => {
      clearTimeout(delay);
    };
  }, [map, zoom, index, position, nearby]);
  
  
  return (
    <MapContainer
      center={nearby}
      zoom={zoom}
      whenCreated={setMap}
      zoomSnap
      className="map-container"
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAP_USERNAME}/${process.env.REACT_APP_MAP_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker
        position={nearby}
        icon={GPS_SVG}
        zIndexOffset={460}
        title="目前的位置"
        alt="目前的位置"
      >
      </Marker>
      <MarkerClusterGroup
        showCoverageOnHover={false}
        iconCreateFunction={MarkerClusterIcon}
      >
          { nearbyStations.map((item) => (
            <StationMarker key={item.StationUID} item={item} isActive={index === item.StationUID} map={map} />
          ))}
        {/* {loading ? (
          <Loading />
        ) : (
          nearbyStations.map((item) => (
            <StationMarker key={item.StationUID} item={item} isActive={index === item.StationUID} map={map} />
          ))
        )} */}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
