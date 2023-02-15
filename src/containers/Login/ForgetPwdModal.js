import React from 'react';
import {
  Modal, Form, Input, Button, Row, Col, message,
} from 'antd';

function ForgetPwd({ onOk, visible, closeModal }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    messageApi.open({
      type: 'success',
      content: `更改密碼成功${values}`,
    });
  };

  const onFinishFailed = (errorInfo) => {
    messageApi.open({
      type: 'error',
      content: `更改密碼失敗${errorInfo}`,
    });
  };

  const confirmLogin = () => {
    closeModal();
  };


  return (
    <Modal 
      title="忘記密碼" 
      open={visible}
      onCancel={closeModal}
      footer={null}
  >
      {contextHolder}
        <Form
          form={form}
          name="ForgetModal"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="帳號"
            name="username"
            rules={[{ required: true, message: '請輸入帳號!' }]}
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
            name="userPassword"
            rules={[{ required: true, message: '請輸入確認密碼!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Button type="primary" block onClick={confirmLogin}>
              登入
            </Button>
          </Form.Item>
        </Form>
    </Modal>
  );
}

export default ForgetPwd;
