import React, { useState } from 'react';
import {
  Form, Input, Button, Row, Col, Checkbox,
} from 'antd';
import { Link } from 'react-router-dom';
import { login } from '../../api/apiUtil';
import * as Style from './style';
import Register from './Register';

function Login() {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleUserAccount = (e) => {
    setAccount(e.target.value);
  };

  const handleUserPwd = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    login(account, password);
  };

  const handleRegister = () => {
    setOpenModal(true);
  };
  return (
    <>
      <Row justify="center" align="center">
        <Col>
          <h1>Ubike租車後台系統</h1>
        </Col>
      </Row>
      <Row justify="center" align="center">
        <Form
          name="LoginPage"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="帳號"
            name="username"
            rules={[{ required: true, message: '請輸入帳號!' }]}
          >
            <Input value={account} onChange={handleUserAccount} />
          </Form.Item>
          <Form.Item
            label="密碼"
            name="userPassword"
            rules={[{ required: true, message: '請輸入密碼!' }]}
          >
            <Input.Password value={password} onChange={handleUserPwd} />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 6,
              span: 18,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Link to="/forgetPwd">
              <Button type="primary" onClick={handleLogin} block>
                登入
              </Button>
            </Link>
          </Form.Item>
          <Style.Between>
            <Button onClick={handleRegister}>註冊</Button>
            <Link to="/forgetPwd">
              <h5>忘記密碼</h5>
            </Link>
          </Style.Between>
        </Form>
      </Row>
      <Register isModalOpen={openModal} />
    </>
  );
}

export default Login;
