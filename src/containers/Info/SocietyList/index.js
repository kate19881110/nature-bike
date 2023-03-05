import React, { useState, useEffect } from "react";
import { Table } from "antd";
import tableTitle from "../../../api/Society/tableTitle";
import {userRequest} from "../../../api/apiUtil";

function SocietyList() {
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

  const societyData = () => {
    return userRequest
      .get("/witsGroup")
      .then((res) => {
        setData(res.data);
        return res.data
      })
      .catch((err) => {
        console.log("societyData error", err.toString());
      });
  };

  useEffect(() => {
    societyData();
  }, []);

  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={tableTitle}
        dataSource={data}
        pagination={{
          total: 20,
        }}
      />
    </div>
  );
}

export default SocietyList;
