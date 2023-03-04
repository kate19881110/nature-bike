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
  const [applyDate, setApplyDate] = useState("");
  const [staffName, setStaffName] = useState("");
  const [staffEditor, setStaffEditor] = useState("");
  const [typeOptions, setTypeOptions] = useState(1);
  const [fundSource, setFundSource] = useState(1);
  const [paymentWay, setPaymentWay] = useState(1);
  const [needDate, setNeedDate] = useState("");
  const [sendAddress, setSendAddress] = useState(1);
  const [askPaymentDate, setAskPaymentDate] = useState("");
  const [chargeList, setChargeList] = useState({
    projectNum: "",
    projectItem: "",
    untaxedMoney: "",
    businessTax: "",
    remark: "",
  });
  const [projectNum, setProjectNum] = useState("");
  const [projectItem, setProjectItem] = useState("");
  const [untaxedMoney, setUntaxedMoney] = useState("");
  const [businessTax, setBusinessTax] = useState("");
  const [remark, setRemark] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [sumtotal, setSumtotal] = useState("");
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

  const handleAskPaymentDate = (e) => {
    setAskPaymentDate(e.target.value);
  };

  const handleCreateCharge = (e) => {
    setChargeList({
      projectNum: "",
      projectItem: "",
      untaxedMoney: "",
      businessTax: "",
      remark: "",
    });
  };

  const handleProjectNum = (e) => {
    setProjectNum(e.target.value);
  };

  const handleProjectItem = (e) => {
    setProjectItem(e.target.value);
  };

  const handleUntaxedMoney = (e) => {
    setUntaxedMoney(e.target.value);
  };

  const handleBusinessTax = (e) => {
    setBusinessTax(e.target.value);
  };

  const handleRemark = (e) => {
    setRemark(e.target.value);
  };

  const handleSubtotal = (e) => {
    setSubtotal(e.target.value);
  }

  const handleSumtotal = (e) => {
    setSumtotal(e.target.value);
  }

  const handleSubmit = () => {};

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
          <Input placeholder="請勿填寫..." />
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
          <p>福委會</p>
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
        <Descriptions.Item label="受款人/廠商">
          <p>福委會</p>
        </Descriptions.Item>
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
            value={askPaymentDate}
            onChange={handleAskPaymentDate}
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
        <Descriptions.Item label="新增">
          <Button type="primary" onClick={handleCreateCharge}>
            新增
          </Button>
        </Descriptions.Item>
        <Descriptions.Item label="歸屬部門">
          <p>福委會</p>
        </Descriptions.Item>
        <Descriptions.Item label="專案代號">
          <Input value={projectNum} onChange={handleProjectNum} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="項目">
          <Input value={projectItem} onChange={handleProjectItem} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="未稅金額">
          <Input
            value={untaxedMoney}
            onChange={handleUntaxedMoney}
            allowClear
          />
        </Descriptions.Item>
        <Descriptions.Item label="營業稅/所得稅">
          <Input value={businessTax} onChange={handleBusinessTax} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="備注">
          <Input value={remark} onChange={handleRemark} allowClear />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions bordered column={3} labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item
          label={<div style={{ width: "760px" }}>小計金額(稅前)</div>}
          style={{ width: "250px" }}
        >
          <Input prefix="NT$" value={subtotal} onChange={handleSubtotal} allowClear style={{ width: "230px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "230px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "230px" }} />
        </Descriptions.Item>
        <Descriptions.Item
          label={<div style={{ width: "760px" }}>合計金額(稅後)</div>}
          style={{ width: "250px" }}
        >
          <Input prefix="NT$" value={sumtotal} onChange={handleSumtotal} allowClear style={{ width: "230px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "230px" }} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear style={{ width: "230px" }} />
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
          <Input placeholder="請勿填寫" />
        </Descriptions.Item>
        <Descriptions.Item label="審核">
          <p>未審核</p>
        </Descriptions.Item>
        <Descriptions.Item label="會辦單位">
          <p>會計部</p>
        </Descriptions.Item>
        <Descriptions.Item label="申請人">
          <p>{staffName}</p>
        </Descriptions.Item>
      </Descriptions>
      <div style={{ marginTop: "30px" }}>
        <Button type="primary" block>
          送審
        </Button>
      </div>
    </>
  );
}

export default Charge;
