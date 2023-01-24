import {
  Form, Input, Button, Row, Col, message, Checkbox,
} from 'antd';

function Login() {
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
      <Row justify="center" align="center">
        <Col>
          <h1>山海戀租車後台系統</h1>
        </Col>
      </Row>
      <Row justify="center">
        {contextHolder}
        <Form
          name="LoginPage"
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" block>
              登入
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
}

export default Login;
