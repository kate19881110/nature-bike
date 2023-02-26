import React from 'react';
import {
  Form, Row, Col, Button, Input,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function AddTodoForm(onFormSubmit) {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      name: form.getFieldValue('name'),
    });

    form.resetFields();
  };

  // const searchData = () => {};

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input placeholder="請輸入會員 Email ...." />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <SearchOutlined />
            搜尋
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTodoForm;
