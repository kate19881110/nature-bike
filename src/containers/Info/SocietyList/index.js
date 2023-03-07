import React, { useState, useEffect } from "react";
import { Table } from "antd";
import societyData from "../../../api/mock/societyData";
import useAxios from "../../../hook/useAxios";
import api from "../../../api";

function SocietyList() {
  const { sendRequest: createData } = useAxios();
  const [data, setData] = useState("");
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      name: record.group,
    }),
  };

  const presidentData = () => {
    createData(
      {
        url: api.Society.WotsGroup,
        method: api.Method.Get,
      },
      (res) => {
        setData(res);
        return res
      },
      (err) => {
        console.log("societyData error", err.toString());
      })
  };

  useEffect(() => {
    presidentData();
  }, []);

  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={societyData.tableTitle}
        dataSource={data}
        pagination={{
          total: 20,
        }}
      />
    </div>
  );
}

export default SocietyList;
