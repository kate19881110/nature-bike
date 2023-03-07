import React, { useState, } from "react";
import { Form, Input, Button, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import * as Style from "./style";
import useModal from "../../hook/useModal";
import RegisterModal from "./RegisterModal";
import ForgetPwdModal from "./ForgetPwdModal";
import useAxios from "../../hook/useAxios";
import { setToken } from "../../utils/auth";
import { successPOP, failPOP } from "../../utils/message";
import api from "../../api";

function Login() {
  const { sendRequest: createData } = useAxios();
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registerDataModal = useModal({});
  const forgetDataModal = useModal({});
  const [form] = Form.useForm();

  const handleUserAccount = (e) => {
    setAccount(e.target.value);
  };

  const handleUserPwd = (e) => {
    setPassword(e.target.value);
  };

  const loginAPI = () => {
    createData(
      {
        url: api.Login.User,
        method: api.Method.Post,
        data: {
          userMail: account,
          userPwd: password,
        }
      },
      (res) => {
        const token = `${account}ABCD${password}`;
        setToken(token);
        successPOP("登入");
        setLoading(false);
        window.location.reload();
      },
      (err) => {
        failPOP("登入");
        console.log("loginAPI error", err.toString());
      })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (loading) {
      return;
    }
    loginAPI();
    navigate("/home");
  };

  const handleRegister = () => {
    registerDataModal.openModal();
  };

  const handleForgetPwd = () => {
    forgetDataModal.openModal();
  };

  return (
    <Spin spinning={loading} tip="Loading">
      <ForgetPwdModal {...forgetDataModal} onOk={() => form.submit()} />
      <RegisterModal {...registerDataModal} onOk={() => form.submit()} />
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
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
          <h1>WITS 社團後台系統</h1>
          <Form.Item
            label="帳號"
            name="account"
            rules={[{ required: true, message: "請輸入帳號!" }]}
          >
            <Input value={account} onChange={handleUserAccount} />
          </Form.Item>
          <Form.Item
            label="密碼"
            name="userPassword"
            rules={[{ required: true, message: "請輸入密碼!" }]}
          >
            <Input.Password value={password} onChange={handleUserPwd} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button type="primary" onClick={handleLogin} block>
              登入
            </Button>
          </Form.Item>
          <Style.Between>
            <Button onClick={handleRegister}>註冊</Button>
            <Button onClick={handleForgetPwd}>忘記密碼</Button>
          </Style.Between>
        </Form>
      </Row>
    </Spin>
  );
}

export default Login;
