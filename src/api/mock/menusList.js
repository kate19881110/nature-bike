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
  InboxOutlined,
  SkinOutlined,
  StarOutlined,
} from "@ant-design/icons";

const menusList = [
  {
    label: 'Home',
    key: "/home",
    name: "Home",
    icon: <HomeOutlined />, 
  },
  {
    label: 'Profile',
    key: "/profile",
    name: "Profile",
    icon: <UserOutlined />,
  },
  {
    label: 'CRM',
    key: "/crm",
    name: "CRM",
    icon: <SmileOutlined />,
    children: [
      {
        label: 'Dashboard',
        key: '/crm/dashboard',
        name: 'Dashboard',
        icon: <PieChartOutlined />,
      },
      {
        label: 'Customer',
        key: '/crm/customer',
        name: 'Customer',
        icon: <TeamOutlined />,
      },
    ],
  },
  {
    label: 'Bike',
    key: "/bike",
    name: "Bike",
    icon: <GlobalOutlined />,
    children: [
      {
        label: 'Map',
        key: '/bike/map',
        name: 'Map',
        icon: <EnvironmentOutlined />,
      },
      {
        label: 'Site',
        key: '/bike/site',
        name: 'Site',
        icon: <HeartOutlined />,
      },
    ]
  },
  {
    label: 'Goods',
    key: "/goods",
    name: "Goods",
    icon: <InboxOutlined />,
    children: [
      {
        label: 'Clothing',
        key: '/goods/clothing',
        name: 'Clothing',
        icon: <SkinOutlined />,
      },
      {
        label: 'Shoes',
        key: '/goods/Shoes',
        name: 'Shoes',
        icon: <StarOutlined />,
      },
      {
        label: 'Hat',
        key: '/goods/hat',
        name: 'Hat',
        icon: <HeartOutlined />,
      }
    ]
  },
  {
    label: 'Market',
    key: "/market",
    name: "Market",
    icon: <HeartOutlined />,
    children: [
      {
        label: 'Activity',
        key: '/market/activity',
        name: 'Activity',
        icon: <HeartOutlined />,
      },
      {
        label: 'B2c',
        key: '/market/b2c',
        name: 'B2c',
        icon: <HeartOutlined />,
      }
    ]
  },
  {
    label: 'Report',
    key: "/report",
    name: "Report",
    icon: <HeartOutlined />,
    children: [
      {
        label: 'Revenue',
        key: '/report/revenue',
        name: 'Revenue',
        icon: <HeartOutlined />,
      },
      {
        label: 'Cost',
        key: '/report/cost',
        name: 'Cost',
        icon: <HeartOutlined />,
      }
    ]
  }
];

export default menusList;
