import React from "react";
import { Carousel, Row, Col, Divider, Collapse } from "antd";
import homeIng from "../../../static/images/freshmanHandBook.png";
import badminton from "../../../static/images/society_badminton.jpg";
import running from "../../../static/images/society_running.jpg";

const contentStyle = {
  width: "1200px",
  height: "500px",
};
const imgStyle = {
  width: "100%",
  height: "100%",
};
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function ActivityInfo() {
  return (
    <Row>
        <Col sm={24} md={12} lg={12}>
          <Carousel autoplay>
            <div>
              <img style={imgStyle} src={homeIng} alt="freshmanHandBook" />
            </div>
            <div>
              <img style={imgStyle} src={badminton} alt="badminton" />
            </div>
            <div>
              <img style={imgStyle} src={running} alt="running" />
            </div>
          </Carousel>
        </Col>

        <Col sm={24} md={12} lg={12}>
          <Divider orientation="center">最新消息</Divider>
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
    </Row>
  );
}

export default ActivityInfo;
