import React from "react";
import { Row, Col, Card, Image } from "antd";
import * as Style from "./style";
import BikeIcon from "../../../static/icons/bike.png";
import ManIcon from "../../../static/icons/man.png";
import WomanIcon from "../../../static/icons/woman.png";
import BarLineMixTrend from "../../../components/BarLineMixTrend/index";

function Dashboard() {
  return (
    <>
      <Style.MarginBottom>
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
      </Style.MarginBottom>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={12} lg={8}>
          <Card bordered>
            <BarLineMixTrend
              title="年齡/性別比例"
              triggerType="axis"
              color={["#2A52BE", "#DE3163"]}
              xAxisStyle={{
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
              }}
              xAxisType="value"
              yAxisType="category"
              yAxisData={[
                "22~25歲",
                "25歲~30歲",
                "31~35歲",
                "36~40歲",
                "41~45歲",
                "46~50歲",
                "51~55歲",
              ]}
              trendName={["男生", "女性"]}
              seriesType="bar"
              data={[
                [20, 15, 5, 10, 3, 15, 20],
                [10, 3, 25, 13, 8, 4, 13],
              ]}
            />
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8}>
          <Card bordered>
            <BarLineMixTrend
              title="參加活動總人數"
              triggerType="axis"
              color={["#FFD700", "#006374"]}
              xAxisType="category"
              xAxisData={[
                "2022/7",
                "2022/10",
                "2023/3",
                "2023/5",
                "2023/8",
                "2023/12",
              ]}
              yAxisType="value"
              yAxisUnit="{value} 人數"
              trendName={["2022", "2023"]}
              seriesType="line"
              data={[
                [7, 21, 0, 0, 0, 0, 0],
                [0, 0, 15, 8, 12, 30, 18],
              ]}
            />
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8}>
          <Card bordered>
            <BarLineMixTrend
              title="部門參與率"
              triggerType="item"
              color={["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de"]}
              seriesType="pie"
              nameList={["金融一課", "會計部", "工程師", "翻譯部", "人資部"]}
              dataList={[8, 3, 20, 12, 5]}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
