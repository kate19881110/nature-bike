import React, { useEffect, useState } from "react";
import { Form, Radio, Input, Modal } from "antd";
import { editAccount } from "../../../../api/apiUtil";

function EditModal({ onOk, visible, closeModal, editInfo }) {
  // const [fileList, setFileList] = useState([]);
  // const handleChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };

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

  const confirmRequest = (e) => {
    e.preventDefault();
    editAccount(id, userGender, userName, userEmail);
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
      <Form
      >
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
