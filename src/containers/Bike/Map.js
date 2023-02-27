import React, { useState, useEffect, useRef, useContext } from "react";
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
import IconImg from "../../static/icons/SelectMark.png";
import "./Map.css";
import Context from "../../store";

function Map() {
  const ctx = useContext(Context);
  // console.log("共享數據", ctx);
  const [cityName, setSearchCityName] = useState("");
  const [routes, searchRoutes] = useShape();
  const [currentRoutes, setCurrentRoutes] = useState([]);
  const [openBoard, setOpenBoard] = useState(false);
  const [selectedRouterLine, setSelectedRouterLine] = useState([]);
  const [uniqueId, setUniqueId] = useState("");
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    authorityName: "",
    city: "",
    cyclingLength: 0,
    geometry: [],
    start: "",
    end: "",
  });

  const { Meta } = Card;
  const cardRef = useRef(1);
  let wicket = new Wkt.Wkt();

  const GEOstyle = {
    color: "red",
  };

  const calculateKm = (routesLength) => {
    return `${(routesLength / 1000).toFixed(2)}公里`;
  };
  const handleCity = (value) => {
    setSearchCityName(value);
    setOpenBoard(true);
  };

  const transferSpotData = () => {
    let routeData;
    routeData = routes.map((item) => {
      let geo = wicket.read(item.Geometry);
      setUniqueId(item.RouteName);
      return {
        name: item.RouteName,
        uid: item.RouteName,
        authorityName: item.AuthorityName,
        city: item.City,
        cyclingLength: item.CyclingLength,
        geometry: geo.components,
        start: item.RoadSectionStart,
        end: item.RoadSectionEnd,
      };
    });
    setCurrentRoutes(routeData);
  };

  const onResultCardClick = (id) => {
    const selectedResult = currentRoutes.find((item) => {
      return item.uid === id;
    });
    setSelectedCard({
      name: selectedResult.name,
      authorityName: selectedResult.authorityName,
      city: selectedResult.city,
      cyclingLength: selectedResult.cyclingLength,
      geometry: selectedResult.geometry,
      start: selectedResult.start,
      end: selectedResult.end,
    });
  };

  const renderCard = (spots) => {
    return spots.map(
      (item) => (
        (
          <Card
            ref={cardRef}
            key={item.uid}
            id={item.uid}
            hoverable
            style={{ width: 240, zIndex: 1000 }}
            onClick={(e) => {
              onResultCardClick(uniqueId);
            }}
          >
                 {item.uid}
            <Meta title={item.name} description={item.city} />
            <p>{calculateKm(item.cyclingLength)}</p>
          </Card>
        )
      )
    );
  };

  // 選擇縣市的下拉選單，出現 所選的車道card
  useEffect(() => {
    if (cityName !== "") {
      setCurrentRoutes([]);
      searchRoutes({ city: cityName });
    }
  }, [cityName]);

  useEffect(() => {
    transferSpotData();
  }, [routes]);

  useEffect(() => {
    console.log(selectedRouterLine);
  }, [selectedRouterLine]);

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
          />
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
          {renderCard(currentRoutes)}
        </div>
      </Card>
      <MapContainer center={[25.03371, 121.564718]} zoom={18} scrollWheelZoom>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          maxZoom={18}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
          accessToken="pk.eyJ1IjoiamVzc2ljYWthdGUxMTEwIiwiYSI6ImNsZHZnZnB6ZzBmNW8zcHBjejg4c3VnbGsifQ.my0WIAiUL12bgW8_s0TXZQ"
        />
        <Polyline
          pathOptions={GEOstyle}
          positions={selectedRouterLine}
          icon={IconImg}
        />
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
