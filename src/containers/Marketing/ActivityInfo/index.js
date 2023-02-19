import React from "react";
import { Carousel, Row, Col, Divider, Collapse, Image } from "antd";
import * as Style from "./style";
import homeIng from "../../../static/images/freshmanHandBook.png";
import badminton from "../../../static/images/society_badminton.jpg";
import running from "../../../static/images/society_running.jpg";
import tainanGame from "../../../static/images/society_game_tainan.jpg";
import taipeiGame from "../../../static/images/society_game_taipei.png";
import taipeiSwitch from "../../../static/images/society_switch.jpg";
import tainanOK from "../../../static/images/society_song_tainan.jpg";
import taipeiOK from "../../../static/images/society_song.jpg";

const infoStyle = {
  margin: "0 0 0 30px",
};
const imgStyle = {
  width: "100%",
  height: "100%",
};

const imgHeight = {
  width: "100%",
  height: "480px",
};

const cardStyle = {
  width: "200px",
  height: "300px",
};
const { Panel } = Collapse;

function ActivityInfo() {
  return (
    <>
      <Divider orientation="center">最新消息</Divider>
      <Style.Wrapper>
        <Row>
          <Col sm={24} md={12} lg={12}>
            <Carousel autoplay>
              <div>
                <img style={imgStyle} src={homeIng} alt="freshmanHandBook" />
              </div>
              <div>
                <img style={imgHeight} src={badminton} alt="badminton" />
              </div>
              <div>
                <img style={imgStyle} src={running} alt="running" />
              </div>
            </Carousel>
          </Col>

          <Col sm={24} md={11} lg={11} style={infoStyle}>
            <Collapse defaultActiveKey={["1"]} accordion>
              <Panel header="誰是K歌王 ♫♫♫，北竹南比一比" key="1">
                <Style.Between>
                  <p>新竹</p>
                  <Image style={cardStyle} src={taipeiOK} alt="taipeiOK" />
                  <p>台南</p>
                  <Image style={cardStyle} src={tainanOK} alt="tainanOK" />
                </Style.Between>
              </Panel>
              <Panel header="猜猜『桌遊王』" key="2">
                <Style.Direction>
                  <p>台北</p>
                  <Image src={taipeiGame} alt="taipeiGame" />
                  <p>台南</p>
                  <Image style={cardStyle} src={tainanGame} alt="tainanOK" />
                </Style.Direction>
              </Panel>
              <Panel header="Game 起來，讓我們在虛擬世界相見歡" key="3">
                <Image
                  style={cardStyle}
                  src={taipeiSwitch}
                  alt="taipeiSwitch"
                />
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Style.Wrapper>
    </>
  );
}

export default ActivityInfo;
