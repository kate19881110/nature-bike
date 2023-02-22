import React, { useState, useEffect } from "react";
import { Radio, Select, Card } from "antd";
import useShape from "../../hook/useShape";
import cityList from "../../utils/Leaflet/cityList";

function NavBar() {
  const [bikeMenu, setBikeMenu] = useState("單車租借");
  const [cityName, setSearchCityName] = useState("");
  const [routes, searchRoutes] = useShape();
  const { Meta } = Card;
  const navLinkInfo = [
    {
      label: "單車租借",
      value: "單車租借",
    },
    {
      label: "單車路線",
      value: "單車路線",
    },
    {
      label: "單車景點",
      value: "單車景點",
    },
  ];
  const bikeChange = ({ target: { value } }) => {
    setBikeMenu(value);
  };

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
      <Radio.Group
        options={navLinkInfo}
        onChange={bikeChange}
        value={bikeMenu}
        optionType="button"
        buttonStyle="solid"
      />
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
