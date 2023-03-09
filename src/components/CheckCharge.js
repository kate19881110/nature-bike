import React, { useState } from "react";
import { Table } from "antd";
import { getThousand, getPercent } from "../utils/organizeNumbers";

function CheckCharge({ list }) {
  const itemList = Object.values(list);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const chargeTitle = [
    {
      title: "歸屬部門",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "專案代號",
      dataIndex: "projectNum",
      key: "projectNum",
    },
    {
      title: "項目",
      dataIndex: "projectItem",
      key: "projectItem",
    },
    {
      title: "未稅金額",
      dataIndex: "untaxedMoney",
      key: "untaxedMoney",
    },
    {
      title: "營業稅/所得稅",
      dataIndex: "businessTax",
      key: "businessTax",
    },
    {
      title: "備注",
      dataIndex: "remark",
      key: "remark",
    },
  ];
  return itemList.map((item, index) => {
    const data = [];
    for (let i = 1; i < 3; i++) {
      data.push({
        key: i,
        department: `福委會`,
        projectNum: item.projectNum,
        projectItem: item.projectItem,
        untaxedMoney: getThousand(item.untaxedMoney),
        businessTax: getPercent(item.businessTax),
        remark: item.remark,
      });
    }
    return (
      <>
        <div>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          columns={chargeTitle}
          dataSource={data}
          rowSelection={rowSelection}
        />
      </>
    );
  });
}

export default CheckCharge;
