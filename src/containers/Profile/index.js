import React, { useState, useEffect } from "react";
import { Descriptions } from "antd";
import { userRequest } from "../../api/apiUtil";

function Profile() {
  const [data, setData] = useState("");
  const societyData = () => {
    return userRequest
      .get("/users")
      .then((res) => {
        console.log(" res.data", res.data);
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("societyData error", err.toString());
      });
  };

  useEffect(() => {
    societyData();
  }, []);

  return (
    <Descriptions title="個人資料" bordered>
      <Descriptions.Item label="姓名">{data.userName}</Descriptions.Item>
      <Descriptions.Item label="職位">{data.userDept}</Descriptions.Item>
      <Descriptions.Item label="社團">YES</Descriptions.Item>
      <Descriptions.Item label="信箱">YES</Descriptions.Item>
      <Descriptions.Item label="密碼">YES</Descriptions.Item>
    </Descriptions>
  );
}

export default Profile;
