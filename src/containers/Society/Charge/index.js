import React, { useState } from "react";
import {
  Descriptions,
  Divider,
  Row,
  Col,
  Input,
  Radio,
  DatePicker,
  Button,
} from "antd";
import dayjs from "dayjs";
import * as Style from "./style";

function Charge() {
  const [voucherNum, setVoucherNum] = useState("");
  const [applyDate, setApplyDate] = useState("");
  const [staffName, setStaffName] = useState("");
  const [staffEditor, setStaffEditor] = useState("");
  const [typeOptions, setTypeOptions] = useState(1);
  const [fundSource, setFundSource] = useState(1);
  const [paymentWay, setPaymentWay] = useState(1);
  const [needDate, setNeedDate] = useState("");
  const [sendAddress, setSendAddress] = useState(1);
  const dateFormat = "YYYY/MM/DD";
  const date = new Date();
  const makeZero = (number) => {
    if (number < 10) {
      return `0${number.toString()}`;
    }
    return number;
  };
  const toDate = `${date.getFullYear()}/${makeZero(
    date.getMonth() + 1
  )}/${makeZero(date.getDate())}`;

  const handleVoucherNum = (e) => {
    setVoucherNum(e.target.value);
  };

  const handleDate = (e) => {
    setApplyDate(e.target.value);
  };

  const handleStaffName = (e) => {
    setStaffName(e.target.value);
  };

  const handleStaffEditor = (e) => {
    setStaffEditor(e.target.value);
  };

  const handleTypeOptions = (e) => {
    setTypeOptions(e.target.value);
  };

  const handleFundSource = (e) => {
    setFundSource(e.target.value);
  };

  const handlePaymentWay = (e) => {
    setPaymentWay(e.target.value);
  };

  const handleNeedDate = (e) => {
    setNeedDate(e.target.value);
  };

  const handleSendAddress = (e) => {
    setSendAddress(e.target.value);
  };
  return (
    <>
      <Divider orientation="center">【費用申請暨報銷憑單】</Divider>
      <Row>
        <Col lg={{ span: 2 }}>
          <Style.VerticalCenter>
            <p> 憑單號碼: </p>
          </Style.VerticalCenter>
        </Col>
        <Col>
          <Input value={voucherNum} onChange={handleVoucherNum} />
        </Col>
        <Col lg={{ span: 2, offset: 11 }}>
          <Style.VerticalCenter>
            <p>申請日期: </p>
          </Style.VerticalCenter>
        </Col>
        <Col>
          <DatePicker
            defaultValue={dayjs(toDate, dateFormat)}
            format={dateFormat}
            value={applyDate}
            onChange={handleDate}
          />
        </Col>
      </Row>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        size="default"
      >
        <Descriptions.Item label="員工姓名">
          <Input value={staffName} onChange={handleStaffName} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="員工編號">
          <Input value={staffEditor} onChange={handleStaffEditor} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="申請部門" span={2}>
          福委會
        </Descriptions.Item>
        <Descriptions.Item label="性質" span={2}>
          <Radio.Group value={typeOptions} onChange={handleTypeOptions}>
            <Radio value={1}>客戶代購</Radio>
            <Radio value={2}>公司自購</Radio>
            <Radio value={3}>員工自購</Radio>
            <Radio value={4}>其他</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="經費來源" span={2}>
          <Radio.Group value={fundSource} onChange={handleFundSource}>
            <Radio value={1}>公司</Radio>
            <Radio value={2}>客戶</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="報支方式" span={2}>
          <Radio.Group value={paymentWay} onChange={handlePaymentWay}>
            <Row>
              <Style.AlignCenter>
                <Radio value={1}>檢具單據請款</Radio>
              </Style.AlignCenter>
              <Style.Direction>
                <Style.RadioWord>
                  <Radio value={2}>預支 </Radio>
                </Style.RadioWord>
                <Input allowClear />
              </Style.Direction>
              <Style.Direction>
                <Style.RadioWordLength>
                  <Radio value={3}>沖預支 </Radio>
                </Style.RadioWordLength>
                <Input allowClear />
              </Style.Direction>
            </Row>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="需用日期" span={2}>
          <DatePicker
            defaultValue={dayjs(toDate, dateFormat)}
            format={dateFormat}
            value={needDate}
            onChange={handleNeedDate}
          />
        </Descriptions.Item>
        <Descriptions.Item label="受款人/廠商">福委會</Descriptions.Item>
        <Descriptions.Item label="地址">
          <Radio.Group value={sendAddress} onChange={handleSendAddress}>
            <Radio value={1}>帳款逕寄發票地址</Radio>
            <Radio value={2}>其他</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="要求付款日期" span={2}>
          <DatePicker
            defaultValue={dayjs(toDate, dateFormat)}
            format={dateFormat}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        layout="vertical"
        bordered
        column={{
          lg: 7,
        }}
      >
        <Descriptions.Item label="編輯">
          <Button type="primary">編輯</Button>
        </Descriptions.Item>
        <Descriptions.Item label="歸屬部門">
          <Input value="福委會" allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="專案代號">
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="項目">
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="未稅金額">
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="營業稅/所得稅">
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="備注">
          <Input allowClear />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions bordered column={4} labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item label="小計金額(稅前)" style={{ width: "447px" }}>
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "205px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "203px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="合計金額(稅後)" style={{ width: "447px" }}>
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "205px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "203px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input allowClear />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        layout="vertical"
        bordered
        column={{
          lg: 4,
        }}
        labelStyle={{ display: "flex", justifyContent: "center" }}
      >
        <Descriptions.Item label="核准">
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="審核">
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="會辦單位">
          <Input allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="申請人">
          <Input allowClear />
        </Descriptions.Item>
      </Descriptions>
      <div style={{ marginTop: "30px" }}>
        <Button type="primary" block>
          提交
        </Button>
      </div>
    </>
  );
}

export default Charge;
