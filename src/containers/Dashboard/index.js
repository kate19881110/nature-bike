import React from 'react';
import {
  Row, Col, Card, Image,
} from 'antd';
import * as Style from './style';
import BikeIcon from '../../static/icons/bike.png';
import ManIcon from '../../static/icons/man.png';
import WomanIcon from '../../static/icons/woman.png';

function Dashboard() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={24} lg={8}>
        <Card bordered={false}>
          <Style.Center>
            <Image width={100} src={BikeIcon} />
            <p>總人數</p>
          </Style.Center>
        </Card>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Card bordered={false}>
          <Style.Center>
            <Image width={100} src={ManIcon} />
            <p>總人數</p>
          </Style.Center>
        </Card>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Card bordered={false}>
          <Style.Center>
            <Image width={100} src={WomanIcon} />
            <p>總人數</p>
          </Style.Center>
        </Card>
      </Col>
    </Row>
  );
}

export default Dashboard;
