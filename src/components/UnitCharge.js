import React from "react";
import { Descriptions, Input } from "antd";
import { getThousand, getPercent } from "../utils/organizeNumbers";

function UnitCharge({list}) {
  const itemList = Object.values(list);
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
            disabled
          />
        </Descriptions.Item>
        <Descriptions.Item label="項目">
          <Input
            value={item.projectItem}
            disabled
          />
        </Descriptions.Item>
        <Descriptions.Item label="未稅金額">
          <Input
            value={getThousand(item.untaxedMoney)}
            disabled
          />
        </Descriptions.Item>
        <Descriptions.Item label="營業稅/所得稅">
          <Input
            value={getPercent(item.businessTax)}
            disabled
          />
        </Descriptions.Item>
        <Descriptions.Item label="備注">
          <Input
            value={item.remark}
            disabled
          />
        </Descriptions.Item>
      </Descriptions>
    );
  });
}

export default UnitCharge;
