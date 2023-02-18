import React, { useState } from "react";
import { Modal, Form, message, Input, Select } from "antd";
import { registerAPI } from "../../api/apiUtil";

function Register({ onOk, visible, closeModal }) {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    messageApi.open({
      type: "success",
      content: `註冊成功${values}`,
    });
  };

  const onFinishFailed = (errorInfo) => {
    messageApi.open({
      type: "error",
      content: `註冊失敗${errorInfo}`,
    });
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserDepartment = (value) => {
    setUserDepartment(value);
  };

  const handleUserMail = (e) => {
    setUserMail(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const deptOptions = [
    {
      label: "業務",
      value: "Sales",
    },
    {
      label: "行銷",
      value: "Marketing",
    },
    {
      label: "會計",
      value: "Account",
    },
  ];

  const confirmRequest = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    registerAPI(userName, userDepartment, userMail, userPassword);
    onOk();
  };
  return (
    <Modal
      title="新戶註冊"
      open={visible}
      onOk={confirmRequest}
      onCancel={closeModal}
    >
      {contextHolder}
      <Form
        form={form}
        name="RegisterModal"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="姓名"
          name="userName"
          rules={[{ required: true, message: "請輸入姓名!" }]}
        >
          <Input value={userName} onChange={handleUserName} />
        </Form.Item>
        <Form.Item
          label="部門"
          name="userDepartment"
          rules={[{ required: true, message: "請選擇部門!" }]}
        >
          <Select
            value={userDepartment}
            onChange={handleUserDepartment}
            options={deptOptions}
            allowClear
          >
          </Select>
        </Form.Item>
        <Form.Item
          label="信箱"
          name="userMail"
          rules={[{ required: true, message: "請輸入信箱!" }]}
        >
          <Input value={userMail} onChange={handleUserMail} />
        </Form.Item>
        <Form.Item
          label="密碼"
          name="userPassword"
          rules={[{ required: true, message: "請輸入密碼!" }]}
        >
          <Input.Password value={userPassword} onChange={handleUserPassword} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Register;
