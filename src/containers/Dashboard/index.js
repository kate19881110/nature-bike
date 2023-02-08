import React from 'react';
import {
  Row, Col, Card, Image,
} from 'antd';
import * as Style from './style';
import BikeIcon from '../../static/icons/bike.png';
import ManIcon from '../../static/icons/man.png';
import WomanIcon from '../../static/icons/woman.png';
// import BarLineMixTrend from './components/compos/BarLineMixTrend';
// import {
//   XAXIS,
//   ROTATE,
//   LABEL,
//   YAXIS,
// } from '../../utils/trendConst';

function Dashboard() {
  return (
    <>
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
      <Row>
        {/* <BarLineMixTrend
          title="性別比例"
          data={[]}
          dataZoomType={[]}
          lineList={['Estimate', 'Montly']}
          lineStyle={{ dashedList: ['Estimate'] }}
          color={[
            '#1570FF',
            '#7BD45C',
            '#F97600',
            '#9DDEF4',
            '#C2A5F9',
            '#FECE00',
            '#389810',
          ]}
          labelQuantifierType={LABEL.quantifierType.none}
          xAxisData={[]}
          xAxisStyle={{
            grid: XAXIS.grid.default,
            rotate: ROTATE.no,
          }}
          xAxisFormatType={XAXIS.formatType['YYYY/MM']}
          yAxisType={YAXIS.type.singleAxis}
          yAxisStyle={{
            name: {
              left: YAXIS.name.amountNtdMillion,
            },
            formatterType: {
              left: YAXIS.formatterType.default,
            },
          }}
        /> */}
      </Row>
    </>
  );
}

export default Dashboard;
