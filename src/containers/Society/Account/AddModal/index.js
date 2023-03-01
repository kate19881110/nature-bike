import React, { useState } from "react";
import { Form, Radio, Input, Modal } from "antd";
import { v4 } from "uuid";
import { addAccount } from "../../../../api/apiUtil";

function AddModal({ onOk, visible, closeModal }) {
  // const [fileList, setFileList] = useState([]);
  // const handleChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const confirmRequest = (e) => {
    e.preventDefault();
    addAccount(
      v4(),
      gender,
      name,
      email,
    );
    onOk();
    closeModal();
    window.location.reload();
  };

  return (
    <Modal
      title="新增會員"
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
          <Radio.Group value={gender} onChange={handleGender}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="姓名">
          <Input value={name} onChange={handleName} />
        </Form.Item>
        <Form.Item label="信箱">
          <Input value={email} onChange={handleEmail} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddModal;
