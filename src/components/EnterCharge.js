import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { Descriptions, Input } from "antd";
import { getThousand, getPercent } from "../utils/organizeNumbers";

function EnterCharge({ onChange }) {
  const [chargeId, setChargeId] = useState("福委會");
  const [projectNum, setProjectNum] = useState("");
  const [projectItem, setProjectItem] = useState("");
  const [untaxedMoney, setUntaxedMoney] = useState("");
  const [businessTax, setBusinessTax] = useState("");
  const [remark, setRemark] = useState("");

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

  const handleChargeId = () => {
    setChargeId(v4);
  };

  // 將表單值傳給父組件
  useEffect(() => {
    onChange({
      chargeId,
      projectNum,
      projectItem,
      untaxedMoney,
      businessTax,
      remark,
    });
  }, [
    chargeId,
    projectNum,
    projectItem,
    untaxedMoney,
    businessTax,
    remark,
    onChange,
  ]);
  return (
    <Descriptions
      layout="vertical"
      bordered
      column={{
        lg: 6,
      }}
    >
      <Descriptions.Item label="歸屬部門">
        <p>福委會</p>
        <Input type="hidden" value={chargeId} onChange={handleChargeId} />
      </Descriptions.Item>
      <Descriptions.Item label="專案代號">
        <Input value={projectNum} onChange={handleProjectNum} allowClear />
      </Descriptions.Item>
      <Descriptions.Item label="項目">
        <Input value={projectItem} onChange={handleProjectItem} allowClear />
      </Descriptions.Item>
      <Descriptions.Item label="未稅金額">
        <Input
          prefix="NT$"
          value={getThousand(untaxedMoney)}
          onChange={handleUntaxedMoney}
          allowClear
        />
      </Descriptions.Item>
      <Descriptions.Item label="營業稅/所得稅">
        <Input
          suffix="%"
          value={getPercent(businessTax)}
          onChange={handleBusinessTax}
          allowClear
        />
      </Descriptions.Item>
      <Descriptions.Item label="備注">
        <Input value={remark} onChange={handleRemark} allowClear />
      </Descriptions.Item>
    </Descriptions>
  );
}

export default EnterCharge;
