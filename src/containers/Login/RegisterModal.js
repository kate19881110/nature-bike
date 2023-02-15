import React, {useState} from 'react';
import {
  Modal, Form, message, Input, Select,
} from 'antd';
import { register } from "../../api/apiUtil";

function Register({ onOk, visible, closeModal }) {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    messageApi.open({
      type: 'success',
      content: `註冊成功${values}`,
    });
  };

  const onFinishFailed = (errorInfo) => {
    messageApi.open({
      type: 'error',
      content: `註冊失敗${errorInfo}`,
    });
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const confirmRequest = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    register();
    closeModal();
    window.location.href = "/";
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
          rules={[{ required: true, message: '請輸入姓名!' }]}
        >
          <Input value={userName} onChange={handleUserName} />
        </Form.Item>
        <Form.Item
          label="部門"
          name="userDepartment"
          rules={[{ required: true, message: '請選擇部門!' }]}
        >
          <Select>
            <Select.Option value="業務">業務</Select.Option>
            <Select.Option value="行銷">行銷</Select.Option>
            <Select.Option value="會計">會計</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="信箱"
          name="userMail"
          rules={[{ required: true, message: '請輸入信箱!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密碼"
          name="userPassword"
          rules={[{ required: true, message: '請輸入密碼!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="確認密碼"
          name="userPassword2"
          rules={[{ required: true, message: '密碼不一致!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Register;
