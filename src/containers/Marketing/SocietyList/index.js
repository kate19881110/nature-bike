import React, { useState, useEffect } from "react";
import { Table } from "antd";
import societyTitle from "../../../api/Table/societyTitle";

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/witsGroup`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={societyTitle}
        dataSource={data}
        pagination={{
          total: 20,
        }}
      />
    </div>
  );
}

export default SocietyList;
