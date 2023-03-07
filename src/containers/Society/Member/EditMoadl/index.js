import React, { useEffect, useState } from "react";
import { Form, Radio, Input, Modal } from "antd";
import { successPOP, failPOP } from "../../../../utils/message";
import useAxios from "../../../../hook/useAxios";
import api from "../../../../api";

function EditModal({ onOk, visible, closeModal, editInfo }) {
  // const [fileList, setFileList] = useState([]);
  // const handleChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };
  const { sendRequest: createData } = useAxios();
  const { id, gender, email, picture, name } = editInfo;
  const [userGender, setUserGender] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const initData = () => {
    setUserGender(gender);
    setUserName(name);
    setUserEmail(email);
  };

  const handleGender = (e) => {
    setUserGender(e.target.value);
  };

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const editAccount = () => {
    createData(
      {
        url: `${api.Society.MemberList}/${id}`,
        method: api.Method.Put,
        data: {
          id,
          gender: userGender,
          name: userName,
          email: userEmail
        },
      },
      (res) => {
        successPOP("編輯會員");
      },
      (err) => {
        failPOP("編輯會員");
        console.log("editAccount error", err.toString());
      }
    );
  };

  const confirmRequest = (e) => {
    e.preventDefault();
    editAccount();
    onOk();
    closeModal();
  };
  useEffect(() => {
    return initData();
  });
  return (
    <Modal
      title="編輯會員"
      open={visible}
      onOk={confirmRequest}
      onCancel={closeModal}
    >
      <Form>
        {/* <Form.Item label="會員照片">
          <Upload
            action= {mockData.results}
            listType="picture-card"
            fileList={fileList} //上傳列表檔案
            onChange={handleChange}
          >
            Upload
          </Upload>
        </Form.Item> */}
        <Form.Item label="性別">
          <Radio.Group value={userGender} onChange={handleGender}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="姓名">
          <Input value={userName} onChange={handleName} allowClear />
        </Form.Item>
        <Form.Item label="信箱">
          <Input value={userEmail} onChange={handleEmail} allowClear />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditModal;
