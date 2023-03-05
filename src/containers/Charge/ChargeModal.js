import React, { useState, useEffect } from "react";
import {
  Modal,
  Radio,
  Input,
  Select,
  Descriptions,
  DatePicker,
  Row,
  Col,
  Button,
  Divider,
} from "antd";
import dayjs from "dayjs";
import * as Style from "./style";
import { getThousand, getPercent } from "../../utils/organizeNumbers";

function ChargeModal({ onOk, visible, closeModal, resData }) {
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";
  const [voucherNum, setVoucherNum] = useState("");

  const handleVoucher = (e) => {
    setVoucherNum(e.target.value);
  };

  return (
    <div>
      {resData.map((item) => {
        const uniqueKey = `chargeModal${item.id}`;
        return (
          <div key={uniqueKey}>
            <Modal
              open={visible}
              onCancel={closeModal}
              footer={null}
              width={1000}
            >
              <Divider orientation="center">【費用申請暨報銷憑單】</Divider>
              <Row>
                <Col lg={{ span: 2 }}>
                  <Style.VerticalCenter>
                    <p> 憑單號碼: </p>
                  </Style.VerticalCenter>
                </Col>
                <Col>
                  <Input value={voucherNum} onClick={handleVoucher} />
                </Col>
                <Col lg={{ span: 2, offset: 11 }}>
                  <Style.VerticalCenter>
                    <p>申請日期: </p>
                  </Style.VerticalCenter>
                </Col>
                <Col>
                  <DatePicker
                    defaultValue={dayjs(item.applyDate, dateFormat)}
                    format={dateFormat}
                    disabled
                  />
                </Col>
              </Row>
              <Descriptions bordered>
                <Descriptions.Item label="員工姓名">
                  {item.staffName}
                </Descriptions.Item>
                <Descriptions.Item label="員工編號">
                  {item.staffEditor}
                </Descriptions.Item>
                <Descriptions.Item label="申請部門" span={2}>
                  <p>福委會</p>
                </Descriptions.Item>
                <Descriptions.Item label="性質" span={2}>
                  <Radio.Group value={item.typeOptions} disabled>
                    <Radio value={1}>客戶代購</Radio>
                    <Radio value={2}>公司自購</Radio>
                    <Radio value={3}>員工自購</Radio>
                    <Radio value={4}>其他</Radio>
                  </Radio.Group>
                </Descriptions.Item>
                <Descriptions.Item label="經費來源" span={2}>
                  <Radio.Group value={item.fundSource} disabled>
                    <Radio value={1}>公司</Radio>
                    <Radio value={2}>客戶</Radio>
                  </Radio.Group>
                </Descriptions.Item>
                <Descriptions.Item label="報支方式" span={2}>
                  <Radio.Group value={item.paymentWay} disabled>
                    <Row>
                      <Style.AlignCenter>
                        <Radio value={1}>檢具單據請款</Radio>
                      </Style.AlignCenter>
                      <Style.Direction>
                        <Style.RadioWord>
                          <Radio value={2}>預支 </Radio>
                        </Style.RadioWord>
                        <Input />
                      </Style.Direction>
                      <Style.Direction>
                        <Style.RadioWordLength>
                          <Radio value={3}>沖預支 </Radio>
                        </Style.RadioWordLength>
                        <Input />
                      </Style.Direction>
                    </Row>
                  </Radio.Group>
                </Descriptions.Item>
                <Descriptions.Item label="需用日期" span={2}>
                  <DatePicker
                    defaultValue={dayjs(item.needDate, dateFormat)}
                    format={dateFormat}
                    disabled
                  />
                </Descriptions.Item>
                <Descriptions.Item label="受款人/廠商">
                  <p>福委會</p>
                </Descriptions.Item>
                <Descriptions.Item label="地址">
                  <Radio.Group value={item.sendAddress} disabled>
                    <Radio value={1}>帳款逕寄發票地址</Radio>
                    <Radio value={2}>其他</Radio>
                  </Radio.Group>
                </Descriptions.Item>
                <Descriptions.Item label="要求付款日期" span={2}>
                  <DatePicker
                    defaultValue={dayjs(item.askPaymentDate, dateFormat)}
                    format={dateFormat}
                    disabled
                  />
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
                  <p>{item.chargeList.projectNum}</p>
                </Descriptions.Item>
                <Descriptions.Item label="項目">
                  <p>{item.chargeList.projectItem}</p>
                </Descriptions.Item>
                <Descriptions.Item label="未稅金額">
                  <p>{getThousand(item.chargeList.untaxedMoney)}</p>
                </Descriptions.Item>
                <Descriptions.Item label="營業稅/所得稅">
                  <p>{getPercent(item.chargeList.businessTax)}</p>
                </Descriptions.Item>
                <Descriptions.Item label="備注">
                  <p>{item.chargeList.remark}</p>
                </Descriptions.Item>
              </Descriptions>
              <Descriptions
                bordered
                labelStyle={{ textAlign: "right" }}
                column={{
                  lg: 2,
                }}
              >
                <Descriptions.Item span={2} label={<div>小計金額(稅後)</div>}>
                  {`${getThousand(item.subtotal)}`}
                </Descriptions.Item>
                <Descriptions.Item span={2} label={<div>合計金額(稅後)</div>}>
                  {`${getThousand(item.sumtotal)}`}
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
                  <p></p>
                </Descriptions.Item>
                <Descriptions.Item label="審核">
                  <p>未審核</p>
                </Descriptions.Item>
                <Descriptions.Item label="會辦單位">
                  <p>會計部</p>
                </Descriptions.Item>
                <Descriptions.Item label="申請人">
                  <p>{item.staffName}</p>
                </Descriptions.Item>
              </Descriptions>
              <div style={{ marginTop: "30px" }}>
                <Button type="primary" block>
                  核准
                </Button>
              </div>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}

export default ChargeModal;
