import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Select, Card } from "antd";
import Wkt from "wicket";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Nav from "./component/Nav";
import useShape from "../../hook/useShape";
import cityList from "../../utils/transPortData";
import "./Map.css";

function Map() {
  const resultRef = useRef(null);
  let wicket = new Wkt.Wkt();
  const { Meta } = Card;
  const [cityName, setSearchCityName] = useState("");
  const [routes, searchRoutes] = useShape();
  const [openBoard, setOpenBoard] = useState(false);
  const [selectedRouterLine, setSelectedRouterLine] = useState([]);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    authorityName: "",
    city: "",
    cyclingLength: 0,
    geometry: [],
    start: "",
    end: "",
  });

  const GEOstyle = {
    color: "red",
  };
  const handleCity = (value) => {
    setSearchCityName(value);
    setOpenBoard(true);
  };

  // const getOwnPosition = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let { longitude } = position.coords; // 經度
  //       let { latitude } = position.coords; // 緯度
  //     });
  //   }
  // };

  const calculateKm = (routesLength) => {
    return `${(routesLength / 1000).toFixed(1)}KM`;
  };

  const onRouteCardClick = (bike) => {
    // console.log("bike.Geometry", bike.Geometry);
    let geo = bike.Geometry;
    console.log("geo", geo);
    setSelectedCard({
      name: bike.RouteName,
      authorityName: bike.AuthorityName,
      city: bike.City,
      cyclingLength: bike.CyclingLength,
      geometry: geo,
      start: bike.RoadSectionStart,
      end: bike.RoadSectionEnd,
    });
  };

  const routePolyLine = () => {
    console.log("selectedCard", selectedCard);
    let array = selectedCard.geometry[0].map((item) => {
      return [item.y, item.x];
    });
    setSelectedRouterLine([array]);
  };

  let cardList = routes.map((item) => (
    <Card
      ref={resultRef}
      hoverable
      style={{ width: 240, zIndex: 1000 }}
      onClick={onRouteCardClick(item)}
    >
      {/* <p>軌跡資料: {item.Geometry}</p> */}
      <Meta title={item.RouteName} description={item.Town} />
      <p>{calculateKm(item.CyclingLength)}</p>
    </Card>
  ));

  useEffect(() => {
    if (cityName !== "") {
      searchRoutes({ city: cityName });
    }
  }, [cityName]);

  // 選擇card後，指定座標給map
  useEffect(() => {
    try {
      let array = selectedCard.geometry[0].map((item) => {
        return [item.y, item.x];
      });

      setSelectedRouterLine([array]);
    } catch (error) {
      console.log("error");
    }
  }, [selectedCard]);

  return (
    <div>
      <div>
        <Nav />
        <div>
          <Select
            style={{
              width: 120,
            }}
            value={cityName}
            onChange={handleCity}
            options={cityList.siteOptions}
            allowClear
          >
          </Select>
        </div>
      </div>
      <Card
        style={{
          display: openBoard,
          background: "grey",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {cardList}
        </div>
      </Card>
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
        <Polyline pathOptions={GEOstyle} positions={selectedRouterLine} />
        <Marker position={[25.03371, 121.564718]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
