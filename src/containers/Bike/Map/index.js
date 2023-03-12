import React, { useState, useEffect, useRef, useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Select, Card, Button, Drawer, Row, Col } from "antd";
import Wkt from "wicket";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useShape from "../../../hook/useShape";
import cityList from "../../../utils/transPortData";
import "./index.css";
import Context from "../../../store";

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
  const [isToggled, setIsToggled] = useState(false);
  const { Meta } = Card;
  const mapRef = useRef(null);
  const cardRef = useRef(1);
  let wicket = new Wkt.Wkt();

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
    setIsToggled(!isToggled);
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
    return spots.map((item) => (
      <Col span={12}>
        <Card
          ref={cardRef}
          key={item.uid}
          id={item.uid}
          hoverable
          onClick={(e) => {
            onResultCardClick(uniqueId);
          }}
        >
          <Meta title={item.name} description={item.city} />
          <p>{calculateKm(item.cyclingLength)}</p>
        </Card>
      </Col>
    ));
  };

  const showDrawer = () => {
    setIsToggled(!isToggled);
  };

  // 定位 selectedRouterLine 路線
  if (selectedRouterLine.length > 0) {
    const bounds = L.latLngBounds(selectedRouterLine[0]); // L.latLngBounds() 函數建立包含路線
    // useRef() 創建一個 ref 來獲取實例 , mapRef.current 獲取地圖實例
    mapRef.current.fitBounds(bounds); // fitBounds() 函數將地圖視角調整到範圍內
  }

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
    <>
      <Drawer
        title="台灣自行車車道"
        width={600}
        placement="right"
        open={isToggled}
        onClose={showDrawer}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <p>請選擇縣市...</p>
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

        <div
          style={{
            display: openBoard,
            overflow: "scroll",
            height: "500px",
          }}
        >
          <Row gutter={[16, 16]}>
            {renderCard(currentRoutes)}
          </Row>
        </div>
      </Drawer>

      <div
        style={{
          position: "relative",
        }}
      >
        <Button
          type="primary"
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={showDrawer}
        >
          選單
        </Button>
        <MapContainer
          ref={mapRef}
          center={[25.03371, 121.564718]}
          zoom={18}
          scrollWheelZoom
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
          <Polyline positions={selectedRouterLine} color="red" weight={3} />
          {selectedRouterLine.length > 0 && (
            <>
              <Marker position={selectedRouterLine[0][0]}>
                <Popup color="blue">起點</Popup>
              </Marker>
              <Marker
                position={
                  selectedRouterLine[0][selectedRouterLine[0].length - 1]
                }
              >
                <Popup color="blue">終點</Popup>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
