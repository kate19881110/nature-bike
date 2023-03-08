import React, { useState } from "react";
import { Modal, Form, Input, Select } from "antd";
import societyData from "../../api/mock/societyData";
import { successPOP, failPOP } from "../../utils/message";
import useAxios from "../../hook/useAxios";
import api from "../../api";

function RegisterModal({ onOk, visible, closeModal }) {
  const { sendRequest: createData } = useAxios();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userSociety, setUserSociety] = useState("");
  const [form] = Form.useForm();

  const onFinish = () => {
    successPOP("註冊");
  };

  const onFinishFailed = () => {
    failPOP("註冊失敗");
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserSociety = (value) => {
    setUserSociety(value);
  };

  const handleUserMail = (e) => {
    setUserMail(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleUserDepartment = (value) => {
    setUserDepartment(value);
  };

  const registerAPI = () => {
    createData(
      {
        url: api.Login.User,
        method: api.Method.Post,
        data: {
          userName,
          userDept: userDepartment,
          userSociety,
          userMail,
          userPwd: userPassword,
        },
      },
      (res) => {
        successPOP("註冊");
      },
      (err) => {
        failPOP("註冊失敗");
        console.log("register error", err.toString());
      }
    );
  };

  const confirmRequest = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    registerAPI();
    onOk();
    closeModal();
  };

  return (
    <Modal
      title="新戶註冊"
      open={visible}
      onOk={confirmRequest}
      onCancel={closeModal}
    >
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
          label="職位"
          name="userDepartment"
          rules={[{ required: true, message: "請選擇職位!" }]}
        >
          <Select
            value={userDepartment}
            onChange={handleUserDepartment}
            options={societyData.deptOptions}
            allowClear
          >
          </Select>
        </Form.Item>
        {userDepartment === "Host" ? (
          <Form.Item
            label="社團"
            name="userSociety"
            rules={[{ required: true, message: "請選擇社團!" }]}
          >
            <Select
              value={userSociety}
              onChange={handleUserSociety}
              options={societyData.societyOptions}
              allowClear
            >
            </Select>
          </Form.Item>
        ) : (
          ""
        )}
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

export default RegisterModal;
