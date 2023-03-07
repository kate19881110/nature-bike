import React from "react";
import { Layout, Row, Col, Dropdown, Avatar, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { deleteToken } from "../../utils/auth";
import { successPOP } from "../../utils/message";

const { Header } = Layout;
const onClick = ({ key }) => {
  if (key === "1") {
    deleteToken();
    successPOP("登出");
    window.location.reload();
  }
};
const items = [
  {
    label: "登出",
    key: "1",
  },
  {
    label: <a href="/profile">個人資訊</a>,
    key: "2",
  },
];
function HeaderElement() {
  return (
    <Header
      style={{
        position: "sticky",
        with: "100%",
        top: 0,
        zIndex: 1000,
        background: "dark",
      }}
    >
      <Row type="flex" justify="end" align="middle">
        <Col span={2}>
          <Dropdown
            menu={{
              items,
              onClick,
              selectable: true,
            }}
          >
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
              <DownOutlined style={{ color: "#fff" }} />
            </Space>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderElement;
