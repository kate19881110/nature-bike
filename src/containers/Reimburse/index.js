import React, { useState } from "react";
import { Table, Form, Button } from "antd";
import {
  EditOutlined, DeleteOutlined
} from "@ant-design/icons";
import ChargeModal from "./ChargeModal";
import useModal from "../../hook/useModal";



function Reimburse() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const chargeDataModal = useModal({});
  const [form] = Form.useForm();
  const handleCharge = () => {
    chargeDataModal.openModal();
  }
  const titleText = [
    {
      title: "申請人",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "社團",
      dataIndex: "society",
      key: "society",
    },
    {
      title: "申請事項",
      dataIndex: "terms",
      key: "terms",
    },
    {
      title: "管理者核可",
      dataIndex: "result",
      key: "result",
    },
    {
      title: "申請日期",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "審核",
      dataIndex: "review",
      key: "review",
    },
    {
      title: "動作",
      dataIndex: "action",
      key: "action",
    },
  ];
  
  const data = [];
  for (let i = 1; i < 3; i++) {
    data.push({
      key: i,
      name: `Kate${i}`,
      society: "自行車社",
      terms: "社團費用",
      result: "未審核",
      date: `${2023}/${3}/${2 + i}`,
      review: <EditOutlined onClick={handleCharge} />,
      action: <>
      <Button type="primary">退件</Button>
      <DeleteOutlined />
              </>
    });
  }

  // const data = [
  //   {
  //     key: 1,
  //     date: "2023/03/02",
  //     name: "Kate",
  //     society: "自行車社",
  //     terms: "社團費用",
  //   },
  //   {
  //     key: 2,
  //     date: "2023/03/05",
  //     name: "Sammi",
  //     society: "卡拉OK社",
  //     terms: "社團費用",
  //   },
  // ];
  
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
     <ChargeModal {...chargeDataModal} onOk={() => form.submit()} />
    <div>
      <div>
        <Button>全部審核</Button>
      </div>
    </div>
      <span>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
      </span>
      <Table
        rowSelection={rowSelection}
        columns={titleText}
        dataSource={data}
      />
      ;
    </>
  );
}

export default Reimburse;
