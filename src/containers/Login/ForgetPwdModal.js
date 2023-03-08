import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { successPOP, failPOP } from "../../utils/message";
import useAxios from "../../hook/useAxios";
import api from "../../api";

function ForgetPwd({ onOk, visible, closeModal }) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const [id, setId] = useState("");
  const [resData, setResData] = useState([]);
  const { sendRequest: fetchData } = useAxios();
  const { sendRequest: createData } = useAxios();
  const [form] = Form.useForm();
  const onFinish = () => {
    successPOP("更改密碼");
  };

  const onFinishFailed = () => {
    failPOP("更改密碼失敗");
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleChkPassword = (e) => {
    setChkPassword(e.target.value);
  };

  const searchAccount = (name) => { 
    const userObject = resData.filter((value) => {
      return name === value.userName;
    });
    setId(userObject[0].id);
    return userObject[0].id
  };

  const forgetPwdAPI = (userId, userPwd) => {
    createData(
      {
        url: `${api.Login.User}/${userId}`,
        method: api.Method.PATCH,
        data: {
          userPwd,
        }
      },
      (res) => {
        successPOP("更改密碼");
        onOk();
        closeModal();
      },
      (err) => {
        failPOP("更改密碼失敗");
        console.log("forgetFwd error", err.toString());
      }
    );
  }

  const confirmLogin = async () => {
    if (userPassword !== chkPassword) {
      alert("密碼不一致!");
    } else {
      await searchAccount(userName);
      await forgetPwdAPI(id, userPassword);
      onOk();
    }
  };

  useEffect(() => {
    fetchData({ url: "/users" }, (res) => {
      setResData(res);
    });
  }, []);

  return (
    <Modal title="忘記密碼" open={visible} onCancel={closeModal} footer={null}>
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
          rules={[{ required: true, message: "請輸入帳號!" }]}
        >
          <Input value={userName} onChange={handleUserName} />
        </Form.Item>
        <Form.Item
          label="密碼"
          name="userPassword"
          rules={[{ required: true, message: "請輸入密碼!" }]}
        >
          <Input.Password value={userPassword} onChange={handleUserPassword} />
        </Form.Item>
        <Form.Item
          label="確認密碼"
          name="chkPassword"
          rules={[{ required: true, message: "請輸入確認密碼!" }]}
        >
          <Input.Password value={chkPassword} onChange={handleChkPassword} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" block onClick={confirmLogin}>
            確認
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ForgetPwd;
