import React from 'react';
import {
  Layout,
  Row,
  Col,
  Dropdown,
  Avatar,
  Badge,
  Space,
  Typography,
} from 'antd';
import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;
// const onClick = ({ key }) => {
//   console.log(`Click on item ${key}`);
// };
const items = [
  {
    label: '登出',
    key: '1',
  },
  {
    label: '個人訊息',
    key: '2',
  },
];
function HeaderElement() {
  return (
      <Header
        style={{
          position: 'sticky',
          with: '100%',
          top: 0,
          zIndex: 1,
          background: 'dark',
        }}
      >
        <Row type="flex" justify="end" align="middle">
          <Col span={2}>
            <Badge count={2}>
              <Link to="/">
                <BellOutlined style={{ fontSize: '20px', color: '#fff' }} />
              </Link>
            </Badge>
          </Col>
          <Col span={2}>
            <Dropdown
              menu={{
                items,
                selectable: true,
              }}
            >
              <Typography.Link>
                <Space>
                  <Avatar size="large" icon={<UserOutlined />} />
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
          </Col>
        </Row>
      </Header>
  );
}

export default HeaderElement;
