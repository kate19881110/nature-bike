import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ChargeModal from "./ChargeModal";
import useModal from "../../hook/useModal";
import useAxios from "../../hook/useAxios";

function Reimburse() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const chargeDataModal = useModal({});
  const [resData, setResData] = useState([]);
  const { sendRequest: fetchData } = useAxios();

  const [form] = Form.useForm();
  const handleCharge = () => {
    chargeDataModal.openModal();
  };
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
      action: (
        <>
          <Button type="primary">核准</Button>
          <Button type="primary" danger>
            退件
          </Button>
        </>
      ),
    });
  }

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  useEffect(() => {
    fetchData({ url: "/chargeItemList", method: "GET" }, (res) => {
      setResData(res);
    });
  }, []);
  return (
    <>
      <ChargeModal
        {...chargeDataModal}
        resData={resData}
        onOk={() => form.submit()}
      />
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        <div>
          <Button type="primary">全部審核</Button>
        </div>
        <span>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
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
