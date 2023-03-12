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
  const [staffEditor, setStaffEditor] = useState("");
  const [typeOptions, setTypeOptions] = useState(1);
  const [fundSource, setFundSource] = useState(1);
  const [paymentWay, setPaymentWay] = useState(1);
  const [sendAddress, setSendAddress] = useState(1);
  const [chargeRowList, setChargeRowList] = useState([0]);
  const [subtotal, setSubtotal] = useState("");
  const [sumtotal, setSumtotal] = useState("");
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
  const feeList = [];
  const handleNewCharge = (chargeObject) => {
    console.log("chargeRowList", chargeRowList);
    // 處理新增費用款項
    console.log("charge", chargeObject);
    feeList.push(chargeObject);
    console.log("feeList", feeList);
    // handleSubtotal(feeList);
   
  };

  // const handleSubtotal = (Object) => {
  //   const subNum = Object.map((item) => parseInt(item.untaxedMoney));
  //   console.log("subNum", subNum);
  //   const initialValue = 0;
  //   const sumWithInitial = subNum.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     initialValue
  //   );
  //   setSubtotal(sumWithInitial);
  //   console.log("sumWithInitial", sumWithInitial);
  // };

  // const handleSumtotal = (e) => {
  //   setSumtotal(e.target.value);
  // };

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
          society: "羽球社",
          result: "未審核",
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
        <EnterCharge key={item.chargeId} onChange={handleNewCharge} />
      ))}
      <Descriptions bordered column={3} labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item
          label={<div style={{ width: "420px" }}>小計金額(稅前)</div>}
        >
          <Input prefix="NT$" value={subtotal} disabled />
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
          label={<div style={{ width: "420px" }}>合計金額(稅後)</div>}
        >
          <Input prefix="NT$" value={sumtotal} disabled />
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
        <Button type="primary" block onCharge={handleSubmit}>
          送審
        </Button>
      </div>
    </>
  );
}

export default Charge;
