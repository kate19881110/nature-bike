import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, Link } from "react-router-dom";
import menusList from "../../api/mock/menusList";
import Header from "../Header";
import ContentList from "../Content";

const { Sider, Content } = Layout;

function BasicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);

    return (
      <Layout style={{ minHeight: "100vh", minWidth: "100vw"}}>
        <Header />
        <Layout>
          <Sider
            style={{
              background: colorBgContainer,
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
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
              <div style={{ margin: "0 16px 0 0" }}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "left" }}>
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
              </div>
            </Breadcrumb>
            <Content>
              <ContentList />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  };
  return <>{breadCrumbView()}</>;
}
export default BasicLayout;
