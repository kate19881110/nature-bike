import React from 'react';
// import { withRouter } from 'react-router-dom';
import {
  Form, Input, Button, Row, Col, message,
} from 'antd';

function ForgetPwd() {
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    messageApi.open({
      type: 'success',
      content: `登入成功${values}`,
    });
  };

  const onFinishFailed = (errorInfo) => {
    messageApi.open({
      type: 'error',
      content: `登入失敗${errorInfo}`,
    });
  };
  return (
    <>
      {contextHolder}
      <Row justify="center" align="center">
        <Col>
          <h1>忘記密碼</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Form
          name="ForgetPage"
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
          <Form.Item>
            <Button type="primary" block>
              登入
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
}

export default ForgetPwd;
