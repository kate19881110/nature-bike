import React from 'react';
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
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const menus = [
  getItem('Home', 'home', <HomeOutlined />),
  getItem('Profile', 'profile', <UserOutlined />),
  getItem('CRM', 'customer', <SmileOutlined />, [
    getItem('Dashboard', 'dashboard', <PieChartOutlined />),
    getItem('Customer', 'customer', <TeamOutlined />),
  ]),
  getItem('Bike', 'bike', <GlobalOutlined />, [
    getItem('Map', 'map', <EnvironmentOutlined />),
    getItem('Site', 'site', <HeartOutlined />),
  ]),
  getItem('Goods', 'goods', <InboxOutlined />, [
    getItem('Clothing', 'clothing', <SkinOutlined />),
    getItem('Shoes', 'shoes', <StarOutlined />),
    getItem('Hat', 'hat', <HeartOutlined />),
  ]),
  getItem('Market', 'market', <HeartOutlined />, [
    getItem('Activity', 'activity', <HeartOutlined />),
    getItem('B2c', 'b2c', <HeartOutlined />),
  ]),
  getItem('Report', 'rport', <HeartOutlined />, [
    getItem('Revenue', 'revenue', <HeartOutlined />),
    getItem('Cost', 'cost', <HeartOutlined />),
  ]),
];

export default menus;
