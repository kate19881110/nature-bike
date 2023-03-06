import React, { useState } from "react";
import { Descriptions, Input } from "antd";

function UnitCharge({list}) {
  const itemList = Object.values(list);
  const [projectNum, setProjectNum] = useState(
    itemList.map((item) => item.projectNum)
  );
  const [projectItem, setProjectItem] = useState(
    itemList.map((item) => item.projectItem)
  );
  const [untaxedMoney, setUntaxedMoney] = useState(
    itemList.map((item) => item.untaxedMoney)
  );
  const [businessTax, setBusinessTax] = useState(
    itemList.map((item) => item.businessTax)
  );
  const [remark, setRemark] = useState(
    itemList.map((item) => item.remark)
  );

  const handleProjectNum = (index, e) => {
    const projectNums = [...projectNum];
    projectNums[index] = e.target.value;
    setProjectNum(projectNums);
  };

  const handleProjectItem = (index, e) => {
    const projectItems = [...projectItem];
    projectItems[index] = e.target.value;
    setProjectItem(e.target.projectItems);
  };

  const handleUntaxedMoney = (index, e) => {
    const untaxedMoneys = [...untaxedMoney];
    untaxedMoneys[index] = e.target.value;
    setUntaxedMoney(untaxedMoneys);
  };

  const handleBusinessTax = (index, e) => {
    const businessTaxs = [...businessTax];
    businessTaxs[index] = e.target.value;
    setBusinessTax(businessTaxs);
  };

  const handleRemark = (index, e) => {
    const remarks = [...remark];
    remarks[index] = e.target.value;
    setRemark(remarks);
  };

  return itemList.map((item, index) => {
    return (
      <Descriptions
        key={`chargeList${index++}`}
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
            value={item.projectNum}
            onChange={(e) => handleProjectNum(index, e)}
            allowClear
          />
        </Descriptions.Item>
        <Descriptions.Item label="項目">
          <Input
            value={item.projectItem}
            onChange={(e) => handleProjectItem(index, e)}
            allowClear
          />
        </Descriptions.Item>
        <Descriptions.Item label="未稅金額">
          <Input
            value={item.untaxedMoney}
            onChange={(e) => handleUntaxedMoney(index, e)}
            allowClear
          />
        </Descriptions.Item>
        <Descriptions.Item label="營業稅/所得稅">
          <Input
            value={item.businessTax}
            onChange={(e) => handleBusinessTax(index, e)}
            allowClear
          />
        </Descriptions.Item>
        <Descriptions.Item label="備注">
          <Input
            value={item.remark}
            onChange={(e) => handleRemark(index, e)}
            allowClear
          />
        </Descriptions.Item>
      </Descriptions>
    );
  });
}

export default UnitCharge;
