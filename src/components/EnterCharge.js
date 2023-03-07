import React, { useState } from "react";
import { Descriptions, Input } from "antd";
import { getThousand, getPercent } from "../utils/organizeNumbers";

function EnterCharge() {
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
  // const [projectNum, setProjectNum] = useState(
  //   itemList.map((item) => item.projectNum)
  // );

  // const handleProjectNum = (index, e) => {
  //   const projectNums = [...projectNum];
  //   projectNums[index] = e.target.value;
  //   setProjectNum(projectNums);
  // };

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
      </Descriptions.Item>
      <Descriptions.Item label="專案代號">
        <Input
          value={projectNum}
          onChange={(e) => handleProjectNum}
          allowClear
        />
      </Descriptions.Item>
      <Descriptions.Item label="項目">
        <Input
          value={getThousand(untaxedMoney)}
          onChange={(e) => handleProjectItem}
          allowClear
        />
      </Descriptions.Item>
      <Descriptions.Item label="未稅金額">
        <Input
          value={getPercent(businessTax)}
          onChange={(e) => handleUntaxedMoney}
          allowClear
        />
      </Descriptions.Item>
      <Descriptions.Item label="營業稅/所得稅">
        <Input
          value={businessTax}
          onChange={(e) => handleBusinessTax}
          allowClear
        />
      </Descriptions.Item>
      <Descriptions.Item label="備注">
        <Input value={remark} onChange={(e) => handleRemark} allowClear />
      </Descriptions.Item>
    </Descriptions>
  );
}

export default EnterCharge;
