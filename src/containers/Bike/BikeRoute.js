import React, { useState, useEffect } from "react";
import { Select, Card } from "antd";
import Nav from "./component/Nav";
import useShape from "../../hook/useShape";
import cityList from "../../utils/transPortData";

function NavBar() {
  const [cityName, setSearchCityName] = useState("");
  const [routes, searchRoutes] = useShape();
  const { Meta } = Card;

  const handleCity = (value) => {
    console.log("value", value);
    setSearchCityName(value);
  };


  const calculateKm = (routesLength) => {
    return `${(routesLength / 1000).toFixed(1)}KM`;
  };
  let cardList = routes.map((item) => (
    <Card hoverable style={{ width: 240 }}>
      <Meta title={item.RouteName} description={item.Town} />
      <p>{calculateKm(item.CyclingLength)}</p>
    </Card>
  ));

  useEffect(() => {
    if (cityName !== "") {
      searchRoutes({ city: cityName });
    }
  }, [cityName]);
  return (
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
      <div>
        {cardList}
      </div>
    </div>
  );
}

export default NavBar;
