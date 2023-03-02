import React, {useState, useEffect} from "react";
import {
  Modal,
  Radio,
  Input,
  Select,
  Descriptions,
  Divider,
  Row,
  Col,
  Button,
} from "antd";
import {userRequest} from "../../api/apiUtil";
import * as Style from "./style";

function ChargeModal({ onOk, visible, closeModal }) {
  const [data, setData] = useState("");
  const chargeData = () => {
    return userRequest
      .get("/chargeItemList")
      .then((res) => {
        setData(res.data);
        return res.data
      })
      .catch((err) => {
        console.log("societyData error", err.toString());
      });
  };

  useEffect(() => {
    chargeData();
  }, []);


  return (
    <Modal
      title="費用申請暨報銷憑單"
      open={visible}
      onCancel={closeModal}
      style={{width: "700px"}}
    >
    <>
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
          {data.applyDate}
        </Col>
      </Row>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        size="default"
      >
        <Descriptions.Item label="員工姓名">
          {data.staffName}
        </Descriptions.Item>
        <Descriptions.Item label="員工編號">
          {data.staffEditor}
        </Descriptions.Item>
        <Descriptions.Item label="申請部門" span={2}>
          <p>福委會</p>
        </Descriptions.Item>
        <Descriptions.Item label="性質" span={2}>
          <Radio.Group value={data.typeOptions}>
            <Radio value={1}>客戶代購</Radio>
            <Radio value={2}>公司自購</Radio>
            <Radio value={3}>員工自購</Radio>
            <Radio value={4}>其他</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="經費來源" span={2}>
          <Radio.Group value={data.fundSource}>
            <Radio value={1}>公司</Radio>
            <Radio value={2}>客戶</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="報支方式" span={2}>
          <Radio.Group value={data.paymentWay}>
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
          {data.needDate}
        </Descriptions.Item>
        <Descriptions.Item label="受款人/廠商">
          <p>福委會</p>
        </Descriptions.Item>
        <Descriptions.Item label="地址">
          <Radio.Group value={data.sendAddress}>
            <Radio value={1}>帳款逕寄發票地址</Radio>
            <Radio value={2}>其他</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="要求付款日期" span={2}>
           {data.askPaymentDate}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        layout="vertical"
        bordered
        column={{
          lg: 6,
        }}
      >
        <Descriptions.Item label="歸屬部門">
          <p>福委會</p>
        </Descriptions.Item>
        <Descriptions.Item label="專案代號">
          <Input value={data.chargeList} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="項目">
          <Input value={data.chargeList} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="未稅金額">
          <Input
            value={data.chargeList}
            allowClear
          />
        </Descriptions.Item>
        <Descriptions.Item label="營業稅/所得稅">
          <Input value={data.chargeList} allowClear />
        </Descriptions.Item>
        <Descriptions.Item label="備注">
          <Input value={data.chargeList} allowClear />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions bordered column={3} labelStyle={{ textAlign: "right" }}>
        <Descriptions.Item
          label={<div style={{ width: "760px" }}>小計金額(稅前)</div>}
          style={{ width: "250px" }}
        >
          <Input prefix="NT$" value={data.subtotal} allowClear style={{ width: "230px" }} />
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
          <Input prefix="NT$" value={data.society} allowClear style={{ width: "230px" }} />
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
          <p>{data.applyDate}</p>
        </Descriptions.Item>
      </Descriptions>
      <div style={{ marginTop: "30px" }}>
        <Button type="primary" block>
          提交
        </Button>
      </div>
    </>

    </Modal>
  );
}

export default ChargeModal;
