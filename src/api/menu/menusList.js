import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  SmileOutlined,
  PieChartOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const menusList = [
  {
    label: '首頁',
    key: "/home",
    name: "Home",
    icon: <HomeOutlined />, 
  },
  {
    label: '個人資訊',
    key: "/profile",
    name: "Profile",
    icon: <UserOutlined />,
  },
  {
    label: '社團',
    key: "/society",
    name: "Society",
    icon: <SmileOutlined />,
    children: [
      {
        label: '社員名單',
        key: '/society/account',
        name: 'Account',
        icon: <TeamOutlined />,
      },
      {
        label: 'Dashboard',
        key: '/society/dashboard',
        name: 'Dashboard',
        icon: <PieChartOutlined />,
      },
      {
        label: '歷史活動',
        key: '/society/history',
        name: 'History',
        icon: <TeamOutlined />,
      },
      {
        label: '申請經費',
        key: '/society/charge',
        name: 'Charge',
        icon: <TeamOutlined />,
      },
    ],
  },
  {
    label: '腳踏車',
    key: "/bike",
    name: "Bike",
    icon: <GlobalOutlined />,
    children: [
      {
        label: '找路線',
        key: '/bike/map',
        name: 'Map',
        icon: <EnvironmentOutlined />,
      },
      {
        label: '辦活動',
        key: '/bike/Activity',
        name: 'Activity',
        icon: <HeartOutlined />,
      },
    ]
  },
  {
    label: '市場部',
    key: "/market",
    name: "Market",
    icon: <HeartOutlined />,
    children: [
      {
        label: '社團列表',
        key: '/market/list',
        name: 'List',
        icon: <HeartOutlined />,
      },
      {
        label: '活動資訊',
        key: '/market/info',
        name: 'Info',
        icon: <HeartOutlined />,
      },
      {
        label: '經費核銷',
        key: '/market/activity',
        name: 'Activity',
        icon: <HeartOutlined />,
      },
    
    ]
  },
];

export default menusList;
