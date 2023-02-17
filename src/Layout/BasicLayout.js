import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";
import menusList from "../api/menu/menusList";
import HeaderElement from "./Header";
import Content from "./Content";

const { Sider } = Layout;

function BasicLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);

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
              onClick={({ key }) => {
                navigate(key);
              }}
              mode="inline"
              theme="dark"
              defaultSelectedKeys={[window.location.pathname]}
              items={menusList}
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
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                  <Breadcrumb.Item>{name}</Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item>
                    <Link to={`${routeTo}`}>{name}</Link>
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
            <Content />
          </Layout>
        </Layout>
      </Layout>
    );
  };
  return <>{breadCrumbView()}</>;
}
export default BasicLayout;
