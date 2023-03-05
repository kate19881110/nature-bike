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
        key: '/society/member',
        name: 'Member',
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
      {
        label: '費用進度',
        key: '/society/progress',
        name: 'Progress',
        icon: <DollarOutlined />,
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
        key: '/bike/activity',
        name: 'Activity',
        icon: <ScheduleOutlined />,
      },
    ]
  },
  {
    label: '活動訊息',
    key: "/info",
    name: "Market",
    icon: <HeartOutlined />,
    children: [
      {
        label: '最新消息',
        key: '/info/news',
        name: 'News',
        icon: <SoundOutlined />,
      },   
      {
        label: '社團列表',
        key: '/info/list',
        name: 'List',
        icon: <ProfileOutlined />,
      },
    ]
  },
  {
    label: '費用清單',
    key: "/charge",
    name: "Charge",
    icon: <DollarOutlined />,
    children: [
      {
        label: '經費審核',
        key: '/charge/reimburse',
        name: 'Reimburse',
        icon: <ContainerOutlined />,
      },
    ]
  }
];

export default menusList;
