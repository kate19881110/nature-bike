import React, { useState } from "react";
import { Descriptions, Divider, Row, Col, Input, Radio } from "antd";

function Charge() {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Divider orientation="center">【費用申請暨報銷憑單】</Divider>
      <Row>
        <Col span={16}>
          <p>憑單號碼:</p>
        </Col>
        <Col span={8}>
          <p>申請日期:</p>
        </Col>
      </Row>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        size="default"
      >
        <Descriptions.Item label="員工姓名">
          <Input />
        </Descriptions.Item>
        <Descriptions.Item label="員工編號">
          <Input />
        </Descriptions.Item>
        <Descriptions.Item label="申請部門">福委會</Descriptions.Item>
        <Descriptions.Item label="性質" span={2}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>客戶代購</Radio>
            <Radio value={2}>公司自購</Radio>
            <Radio value={3}>員工自購</Radio>
            <Radio value={4}>其他</Radio>
          </Radio.Group>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}

export default Charge;
