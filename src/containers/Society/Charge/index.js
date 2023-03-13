import React, { useState, useEffect, useCallback } from "react";
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
import customParseFormat from "dayjs/plugin/customParseFormat";
import * as Style from "./style";
import { successPOP, failPOP } from "../../../utils/message";
import api from "../../../api";
import useAxios from "../../../hook/useAxios";
import EnterCharge from "../../../components/EnterCharge";
import { getUserInfo } from "../../../utils/auth";

dayjs.extend(customParseFormat);

function Charge() {
  const navigate = useNavigate();
  const { sendRequest: createData } = useAxios();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [chargeList, setChargeList] = useState([]);
  const [tempChargeList, setTempChargeList] = useState([]);
  const [staffEditor, setStaffEditor] = useState("");
  const [typeOptions, setTypeOptions] = useState(1);
  const [fundSource, setFundSource] = useState(1);
  const [paymentWay, setPaymentWay] = useState(1);
  const [sendAddress, setSendAddress] = useState(1);
  const [chargeRowList, setChargeRowList] = useState([0]);
  const [subtotal, setSubtotal] = useState(0);
  const [taxSubTotal, setTaxSubTotal] = useState(0);
  const [allTotal, setAllTotal] = useState("");
  const dateFormat = "YYYY/MM/DD";
  const date = new Date();

  useEffect(() => {
    const myObject = getUserInfo();
    setUserData(myObject);
  }, []);

  const makeZero = (number) => {
    if (number < 10) {
      return `0${number.toString()}`;
    }
    return number;
  };

  const toDate = `${date.getFullYear()}/${makeZero(
    date.getMonth() + 1
  )}/${makeZero(date.getDate())}`;
  const [applyDate, setApplyDate] = useState(toDate);
  const [needDate, setNeedDate] = useState(toDate);
  const [askPaymentDate, setAskPaymentDate] = useState(toDate);

  const handleDate = (value) => {
    setApplyDate(value);
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

  const handleNeedDate = (value) => {
    setNeedDate(value);
  };

  const handleSendAddress = (e) => {
    setSendAddress(e.target.value);
  };

  const handleAskPaymentDate = (value) => {
    setAskPaymentDate(value);
  };

  const handleAddCharge = (e) => {
    const list = [];
    setChargeRowList([...chargeRowList, list]);
  };

  const handleNewCharge = useCallback((chargeObject) => {
    if (chargeObject.isComplete) {
      // 暫存新增的費用款項
      setTempChargeList((prevTempChargeList) => [
        ...prevTempChargeList,
        chargeObject,
      ]);
    }
  }, []);

  useEffect(() => {
    // 當 chargeList 有更新時，將 tempChargeList 加到 chargeList 中
    if (tempChargeList.length > 0) {
      setChargeList((prevChargeList) => [...prevChargeList, ...tempChargeList]);
      setTempChargeList([]);
    }
  }, [tempChargeList]);

  const handleSubtotal = useCallback((feeList) => {
    const subNum = feeList.map((item) => Number(item.untaxedMoney));
    const initialValue = 0;
    const sumWithInitial = subNum.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    setSubtotal(sumWithInitial);
  }, []);

  const handleTax = useCallback((feeList) => {
    // 處理稅金
    const subTaxNum = feeList.map(
      (item) => Number(item.untaxedMoney) * (Number(item.businessTax) / 100)
    );
    const initialValue = 0;
    const sumWithInitial = subTaxNum.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    setTaxSubTotal(sumWithInitial);
  }, []);

  useEffect(() => {
    handleSubtotal(chargeList);
    handleTax(chargeList);
    setAllTotal(subtotal + taxSubTotal);
  }, [chargeList, subtotal, taxSubTotal]);

  const chargeItemListAPI = () => {
    createData(
      {
        url: api.Cost.ChargeItemList,
        method: api.Method.Post,
        data: {
          id: v4(),
          applyDate,
          staffName: userData.name,
          staffEditor,
          typeOptions,
          fundSource,
          paymentWay,
          needDate,
          sendAddress,
          askPaymentDate,
          chargeList,
          subtotal,
          allTotal,
          society: "羽球社",
          result: userData.chargeStatus,
        },
      },
      (res) => {
        successPOP("費用送出");
        setLoading(false);
      },
      (err) => {
        failPOP("費用送出失敗");
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
      <Divider orientation="center">【費用申請暨報銷憑單】</Divider>
      <Row>
        <Col lg={{ span: 2 }}>
          <Style.VerticalCenter>
            <p> 憑單號碼: </p>
          </Style.VerticalCenter>
        </Col>
        <Col>
          <Input disabled />
        </Col>
        <Col lg={{ span: 2, offset: 11 }}>
          <Style.VerticalCenter>
            <p>申請日期: </p>
          </Style.VerticalCenter>
        </Col>
        <Col>
          <DatePicker
            defaultValue={dayjs(applyDate, dateFormat)}
            format={dateFormat}
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
          <Input value={userData.name} disabled />
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
            defaultValue={dayjs(needDate, dateFormat)}
            format={dateFormat}
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
            defaultValue={dayjs(askPaymentDate, dateFormat)}
            format={dateFormat}
            onChange={handleAskPaymentDate}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions bordered labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item label="費用款項" style={{ width: "120px" }}>
          <Button type="primary" onClick={handleAddCharge} block>
            新增
          </Button>
        </Descriptions.Item>
      </Descriptions>
      {chargeRowList.map((item) => (
        <EnterCharge key={item.id} onChange={handleNewCharge} />
      ))}
      <Descriptions bordered column={3} labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item
          label={<div style={{ width: "420px" }}>小計金額(稅前)</div>}
        >
          <Input prefix="NT$" value={subtotal} disabled />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input prefix="NT$" value={taxSubTotal} disabled />
        </Descriptions.Item>
        <Descriptions.Item>
          <Input disabled />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions bordered labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item
          label={<div style={{ width: "420px" }}>合計金額(稅後)</div>}
        >
          <Input
            prefix="NT$"
            value={allTotal}
            disabled
            style={{ width: "510px" }}
          />
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
          <Input disabled />
        </Descriptions.Item>
        <Descriptions.Item label="審核">
          <p>未審核</p>
        </Descriptions.Item>
        <Descriptions.Item label="會辦單位">
          <p>市場部</p>
        </Descriptions.Item>
        <Descriptions.Item label="申請人">
          <Input value={userData.name} disabled />
        </Descriptions.Item>
      </Descriptions>
      <div style={{ marginTop: "30px" }}>
        <Button type="primary" block onClick={handleSubmit}>
          送審
        </Button>
      </div>
    </>
  );
}

export default Charge;
