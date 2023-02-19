import React from "react";
import { Row, Col, Card, Image, Divider } from "antd";
import bikeImg01 from "../../static/images/bike_01.jpg";
import bikeImg02 from "../../static/images/bike_02.jpg";
import bikeImg03 from "../../static/images/bike_03.jpg";

const { Meta } = Card;
function Home() {
  return (
    <>
      <Divider orientation="center">
        <h1>探索台灣山海戀，一起見證『騎』蹟!</h1>
      </Divider>
      <Row>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            <Card
              hoverable
              cover={<Image src={bikeImg01} />}
            >
              <Meta
                title="腳踏車社"
                description="招生海報"
              />
            </Card>
          </Col>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            <Card
              hoverable
              cover={<Image src={bikeImg02} />}
            >
              <Meta
                title="福隆山海騎跡行"
                description="探索台灣東北角"
              />
            </Card>
          </Col>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            <Card
              hoverable
              cover={<Image src={bikeImg03} />}
            >
              <Meta
                title="歡迎來 TAIPEI"
                description="2023首度活動"
              />
            </Card>
          </Col>
      </Row>
    </>
  );
}

export default Home;
