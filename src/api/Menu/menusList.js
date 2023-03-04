import React from "react";
import {
  HomeOutlined,
  SmileOutlined,
  PieChartOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  GlobalOutlined,
  ContainerOutlined,
  SoundOutlined,
  ProfileOutlined,
  DollarOutlined,
  ScheduleOutlined,
  SelectOutlined
} from "@ant-design/icons";

const menusList = [
  {
    label: '首頁',
    key: "/home",
    name: "Home",
    icon: <HomeOutlined />, 
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
        label: '申請經費',
        key: '/society/charge',
        name: 'Charge',
        icon: <SelectOutlined />,
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
        icon: <ScheduleOutlined />,
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
        label: '活動資訊',
        key: '/market/info',
        name: 'Info',
        icon: <SoundOutlined />,
      },   
      {
        label: '社團列表',
        key: '/market/list',
        name: 'List',
        icon: <ProfileOutlined />,
      },
      {
        label: '經費審核',
        key: '/market/review',
        name: 'review',
        icon: <DollarOutlined />,
      },  
    ]
  },
  {
    label: '財務部',
    key: "/account",
    name: "Account",
    icon: <DollarOutlined />,
    children: [
      {
        label: '經費核准',
        key: '/account/reimburse',
        name: 'Activity',
        icon: <ContainerOutlined />,
      },
    ]
  }
];

export default menusList;
