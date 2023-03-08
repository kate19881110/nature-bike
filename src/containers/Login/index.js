import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import * as Style from "./style";
import useModal from "../../hook/useModal";
import RegisterModal from "./RegisterModal";
import ForgetPwdModal from "./ForgetPwdModal";
import useAxios from "../../hook/useAxios";
import { setToken, setUserInfo } from "../../utils/auth";
import { successPOP, failPOP } from "../../utils/message";
import api from "../../api";

function Login() {
  const { sendRequest: fetchData } = useAxios();
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [resData, setResData] = useState([]);
  const navigate = useNavigate();
  const registerDataModal = useModal({});
  const forgetDataModal = useModal({});
  const [form] = Form.useForm();

  const handleUserAccount = (e) => {
    const userAccount = e.target.value;
    if (userAccount.includes("@")) {
      setAccount(userAccount);
    } else {
      failPOP("請填信箱,輸入帳號");
    }
  };

  const handleUserPwd = (e) => {
    setPassword(e.target.value);
  };

  const checkIsMember = () => {
    const isMember = resData.some((item) => {
      return account === item.userMail;
    });
    if (!isMember) {
      failPOP("此帳號不存在，請前往註冊帳號");
      setLoading(false);
    }
    return isMember;
  };

  const checkUserPwd = () => {
    const checkPwd = resData.some((item) => {
      return password === item.userPwd;
    });
    if (!checkPwd) {
      failPOP("你輸入密碼錯誤，請重新輸入密碼");
      setLoading(false);
    }
    return checkPwd;
  };

  const memberData = () => {
    const memberInfo = resData.filter((item) => {
      return account === item.userMail;
    });
    console.log("memberInfo", memberInfo);
    const name = memberInfo[0].userName;
    const email = memberInfo[0].userMail;
    const role = memberInfo[0].userDept;
    let club;
    if (role === "Host") {
      club = memberInfo[0].userSociety;
    }
    setUserInfo(name, email, role, club, "未審核");
  };

  const loginAPI = () => {
    if (checkIsMember()) {
      if (checkUserPwd()) {
        memberData();
        const token = `${account}ABCD${password}`;
        setToken(token);
        successPOP("登入");
        setLoading(false);
        window.location.reload();
      }
    }
  };

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

  useEffect(() => {
    fetchData({ url: api.Login.User, method: api.Method.Get }, (res) => {
      setResData(res);
    });
  }, []);

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
