import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { withRouter } from "react-router-dom";
import menus from "../api/mock/menus";
import HeaderElement from "./Header";
import Router from "../routes";

const { Content, Sider } = Layout;

function BasicLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //   const { pathname } = history;
  return (
    <Layout style={{ minHeight: "100vh", overflowX: "scroll" }}>
      <HeaderElement />
      <Layout>
        <Sider
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            theme="dark"
            items={menus}
            style={{
              height: "100%",
              borderRight: 0,
            }}
          />
        </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Router />
        </Content>
      </Layout>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
