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
import Icon from "../../static/icons/SelectMark.png";
import "./Map.css";

function Map() {
  const { Meta } = Card;
  const cardRef = useRef(1);
  let wicket = new Wkt.Wkt();
  const [cityName, setSearchCityName] = useState("");
  const [routes, searchRoutes] = useShape();
  const [currentRoutes, setCurrentRoutes] = useState([]);
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

  const calculateKm = (routesLength) => {
    return `${(routesLength / 1000).toFixed(1)}公里`;
  };
  const handleCity = (value) => {
    console.log("handleCity", value);
    setSearchCityName(value);
    setOpenBoard(true);
  };




  // TODO
  const transferSpotData = () => {
    let routeData;
    routeData = routes.map((item, index) => {
      let geo = wicket.read(item.Geometry);
      return {
        name: item.RouteName,
        uid: `uid${index}`,
        authorityName: item.AuthorityName,
        city: item.City,
        cyclingLength: item.CyclingLength,
        geometry: geo.components,
        start: item.RoadSectionStart,
        end: item.RoadSectionEnd,
      };
    });
    console.log("transferSpotData routeData", routeData);
    console.log("transferSpotData routes", routes);
    setCurrentRoutes(routeData);
  };

  // TODO 讀不到 selectedResult.name
  const onResultCardClick = (e) => {
    const selectedResult = currentRoutes.find((item) => {
      return item.uid === e.target.id;
    });
    console.log("selectedResult ", selectedResult);
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
    return spots.map((item, index) => (
      <Card
        ref={cardRef}
        key={item.RouteName}
        id={`${item.RouteName}index`}
        hoverable
        style={{ width: 240, zIndex: 1000 }}
        onClick={onResultCardClick}
      >
        <Meta title={item.RouteName} description={item.Town} />
        <p>{calculateKm(item.CyclingLength)}</p>
      </Card>
    ));
  };

    // 選擇縣市的下拉選單，出現 所選的車道card
    useEffect(() => {
      if (cityName !== "") {
        setCurrentRoutes([]);
        searchRoutes({ city: cityName });
      }
    }, [cityName]);
  
    useEffect(() => {
      transferSpotData()
    }, [routes]);
  
    useEffect(() => {
      console.log(selectedRouterLine);
    }, [selectedRouterLine]);

  // 選擇card後，指定座標給map
  useEffect(() => {
    try {
      // const countRef = cardRef.current;
      let array = selectedCard.geometry[0].map((item) => {
        return [item.y, item.x];
      });
      console.log("array", array);
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
          icon={Icon}
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
