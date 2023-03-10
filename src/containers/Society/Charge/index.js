import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import dayjs from "dayjs";
import * as Style from "./style";
import { successPOP, failPOP } from "../../../utils/message";
import api from "../../../api";
import useAxios from "../../../hook/useAxios";
import EnterCharge from "../../../components/EnterCharge";
import { getUserInfo } from "../../../utils/auth";

function Charge() {
  const navigate = useNavigate();
  const { sendRequest: createData } = useAxios();
  const [loading, setLoading] = useState(false);
  const [applyDate, setApplyDate] = useState("");
  const [userData, setUserData] = useState({});
  const [staffEditor, setStaffEditor] = useState("");
  const [typeOptions, setTypeOptions] = useState(1);
  const [fundSource, setFundSource] = useState(1);
  const [paymentWay, setPaymentWay] = useState(1);
  const [needDate, setNeedDate] = useState("");
  const [sendAddress, setSendAddress] = useState(1);
  const [askPaymentDate, setAskPaymentDate] = useState("");
  const [chargeRowList, setChargeRowList] = useState([0]);
  const [subtotal, setSubtotal] = useState("");
  const [sumtotal, setSumtotal] = useState("");
  const dateFormat = "YYYY/MM/DD";
  const date = new Date();

  useEffect(() => {
    const myObject = getUserInfo();
    setUserData(myObject);
  }, []);

  console.log("userData", userData);

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

  const handleAddCharge = (e) => {
    const list = [];
    setChargeRowList([...chargeRowList, list]);
  };

  const handleNewCharge = (charge) => {
    console.log("chargeRowList", chargeRowList);
    // ????????????????????????
    console.log("charge", charge);
  };

  const handleSubtotal = (e) => {
    setSubtotal(e.target.value);
  };

  const handleSumtotal = (e) => {
    setSumtotal(e.target.value);
  };

  const chargeItemListAPI = () => {
    createData(
      {
        url: api.Cost.ChargeItemList,
        method: api.Method.Post,
        data: {
          id: v4(),
          applyDate,
          // staffName,
          staffEditor,
          typeOptions,
          fundSource,
          paymentWay,
          needDate,
          sendAddress,
          askPaymentDate,
          chargeList: {
            projectNum: "",
            projectItem: "AAAA",
            untaxedMoney: 223333,
            businessTax: 5,
            remark: "33322",
          },
          subtotal,
          sumtotal,
          society: "?????????",
          result: "?????????",
        },
      },
      (res) => {
        successPOP("????????????");
        setLoading(false);
      },
      (err) => {
        failPOP("??????????????????");
        console.log("chargeItemListAPI error", err.toString());
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (loading) {
      return;
    }
    chargeItemListAPI();
    navigate("/society/progress");
  };

  return (
    <>
      <Divider orientation="center">?????????????????????????????????</Divider>
      <Row>
        <Col lg={{ span: 2 }}>
          <Style.VerticalCenter>
            <p> ????????????: </p>
          </Style.VerticalCenter>
        </Col>
        <Col>
          <Input placeholder="????????????..." />
        </Col>
        <Col lg={{ span: 2, offset: 11 }}>
          <Style.VerticalCenter>
            <p>????????????: </p>
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
        <Descriptions.Item label="????????????">
          <Input value={userData.name} disabled />
        </Descriptions.Item>
        <Descriptions.Item label="????????????">
          <Input value={staffEditor} onChange={handleStaffEditor} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="????????????" span={2}>
          <p>?????????</p>
        </Descriptions.Item>
        <Descriptions.Item label="??????" span={2}>
          <Radio.Group value={typeOptions} onChange={handleTypeOptions}>
            <Radio value={1}>????????????</Radio>
            <Radio value={2}>????????????</Radio>
            <Radio value={3}>????????????</Radio>
            <Radio value={4}>??????</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="????????????" span={2}>
          <Radio.Group value={fundSource} onChange={handleFundSource}>
            <Radio value={1}>??????</Radio>
            <Radio value={2}>??????</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="????????????" span={2}>
          <Radio.Group value={paymentWay} onChange={handlePaymentWay}>
            <Row>
              <Style.AlignCenter>
                <Radio value={1}>??????????????????</Radio>
              </Style.AlignCenter>
              <Style.Direction>
                <Style.RadioWord>
                  <Radio value={2}>?????? </Radio>
                </Style.RadioWord>
                <Input allowClear />
              </Style.Direction>
              <Style.Direction>
                <Style.RadioWordLength>
                  <Radio value={3}>????????? </Radio>
                </Style.RadioWordLength>
                <Input allowClear />
              </Style.Direction>
            </Row>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="????????????" span={2}>
          <DatePicker
            defaultValue={dayjs(toDate, dateFormat)}
            format={dateFormat}
            value={needDate}
            onChange={handleNeedDate}
          />
        </Descriptions.Item>
        <Descriptions.Item label="?????????/??????">
          <p>?????????</p>
        </Descriptions.Item>
        <Descriptions.Item label="??????">
          <Radio.Group value={sendAddress} onChange={handleSendAddress}>
            <Radio value={1}>????????????????????????</Radio>
            <Radio value={2}>??????</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="??????????????????" span={2}>
          <DatePicker
            defaultValue={dayjs(toDate, dateFormat)}
            format={dateFormat}
            value={askPaymentDate}
            onChange={handleAskPaymentDate}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions bordered labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item label="????????????" style={{ width: "120px" }}>
          <Button type="primary" onClick={handleAddCharge} block>
            ??????
          </Button>
        </Descriptions.Item>
      </Descriptions>
      {chargeRowList.map((item) => (
        <EnterCharge key={item.chargeId} onChange={handleNewCharge} />
      ))}
      <Descriptions bordered column={3} labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item
          label={<div style={{ width: "420px" }}>????????????(??????)</div>}
        >
          <Input
            prefix="NT$"
            value={subtotal}
            onChange={handleSubtotal}
            allowClear
            disabled
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions bordered column={3} labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item
          label={<div style={{ width: "420px" }}>????????????(??????)</div>}
        >
          <Input
            prefix="NT$"
            value={sumtotal}
            onChange={handleSumtotal}
            allowClear
            disabled
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" allowClear />
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
        <Descriptions.Item label="??????">
          <Input disabled />
        </Descriptions.Item>
        <Descriptions.Item label="??????">
          <p>?????????</p>
        </Descriptions.Item>
        <Descriptions.Item label="????????????">
          <p>?????????</p>
        </Descriptions.Item>
        <Descriptions.Item label="?????????">
        <Input value={userData.name} disabled />
        </Descriptions.Item>
      </Descriptions>
      <div style={{ marginTop: "30px" }}>
        <Button type="primary" block onCharge={handleSubmit}>
          ??????
        </Button>
      </div>
    </>
  );
}

export default Charge;
