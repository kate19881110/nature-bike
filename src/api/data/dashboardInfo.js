import React from "react";
import { HistoryOutlined } from "@ant-design/icons";
import { Image } from "antd";
import route1 from "../../static/images/bike_route_1.jpg";
import route2 from "../../static/images/bike_route_2.jpg";
import route3 from "../../static/images/bike_route_3.jpg";
import route4 from "../../static/images/bike_route_4.jpg";
import route5 from "../../static/images/bike_route_5.jpg";

const dashboardInfo = {
  timeLineData: [
    {
      color: "#BDB76B",
      label: "2023第四季活動",
      children: "未排定",
    },
    {
      color: "#BDB76B",
      label: "2023第三季活動",
      children: "未排定",
    },

    {
      color: "#BDB76B",
      label: "2023第二季活動",
      children: "未排定",
    },

    {
      color: "#BDB76B",
      label: "2023第一季活動",
      children: "未排定",
    },
    {
      color: "#4169E1",
      label: "2023-02-25",
      children: "北門『TAIPEI』腳踏車行",
    },
    {
      color: "#00808C",
      label: "2022-12-03",
      children: "淡水追風雲門劇場",
    },
    {
      color: "#4169E1",
      label: "2022-10-22",
      children: "福隆東北角山海騎跡輕旅行",
    },
    {
      color: "#DE3163",
      label: "2022-09-22",
      dot: (
        <HistoryOutlined
          style={{
            fontSize: "16px",
          }}
        />
      ),
      children: "成立『緯創自行車社』",
    },
  ],
  leaderTitle: [
    {
      title: "排名",
      dataIndex: "leader",
      key: "leader",
      width: 150,
    },
    {
      title: "照片",
      dataIndex: "photo",
      key: "photo",
      width: 150,
      render: (record) => {
        console.log(record);
        return (
          <Image
            alt=""
            src={record}
            style={{ width: "100px", height: "60px" }}
          />
        );
      },
    },
    {
      title: "縣市",
      dataIndex: "city",
      key: "city",
      width: 150,
    },
    {
      title: "車道",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "公里數",
      dataIndex: "km",
      key: "km",
      width: 150,
    },
  ],
  leaderBoard: [
    {
      key: "1",
      leader: 1,
      photo: route1,
      city: "南投縣",
      name: "日月潭環潭自行車道",
      km: "30公里",
    },
    {
      key: "2",
      leader: 2,
      photo: route2,
      city: "台中市",
      name: "后豐鐵馬道",
      km: "20公里",
    },
    {
      key: "3",
      leader: 3,
      photo: route3,
      city: "南投縣",
      name: "集集環鎮自行車道",
      km: "25公里",
    },
    {
      key: "4",
      leader: 4,
      photo: route4,
      city: "桃園縣",
      name: "石門水庫自行車道",
      km: "15公里",
    },
    {
      key: "5",
      leader: 5,
      photo: route5,
      city: "台北市",
      name: "北門自行車道",
      km: "10公里",
    },
  ],
};

export default dashboardInfo;
