import React, { useState, useEffect } from "react";
import { Table, Form } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useModal from "../../../hook/useModal";
import useAxios from "../../../hook/useAxios";
import api from "../../../api";

function Progress() {
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
      title: "申請進度",
      dataIndex: "progress",
      key: "progress",
    },
    {
      title: "申請日期",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "退件原因",
      dataIndex: "reason",
      key: "reason",
    },
  ];

  const data = [];
  for (let i = 1; i < 3; i++) {
    data.push({
      key: i,
      name: `Kate${i}`,
      society: "自行車社",
      terms: "社團費用",
      progress: "未審核",
      date: `${2023}/${3}/${2 + i}`,
      reason: "", 
    });
  }

  useEffect(() => {
    fetchData({ url: api.Cost.ChargeItemList, method: api.Method.Get }, (res) => {
      setResData(res);
    });
  }, []);
  return (
    <>
      <Table
        columns={titleText}
        dataSource={data}
      />
      ;
    </>
  );
}

export default Progress;
