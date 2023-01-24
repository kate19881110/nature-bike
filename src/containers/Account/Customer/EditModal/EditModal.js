import {
  Form, Radio, Input, Modal,
} from 'antd';
import { useState } from 'react';
import { v4 } from 'uuid';
// import mockData from '../TodoList/mock.json';

function EditModal(openModal, closeModal, add) {
  // const [fileList, setFileList] = useState([]);
  // const handleChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };

  const [gender, setGender] = useState('');
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const [name, setName] = useState('');
  const handleName = (e) => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOk = () => {
    closeModal(false);
    add((prevData) => [
      {
        id: v4(),
        gender,
        name,
        email,
      },
      ...prevData,
    ]);
  };
  const handleCancel = () => {
    closeModal(false);
  };
  return (
    <Modal
      title="會員資訊"
      open={openModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form>
        <Form.Item label="會員照片">
          {/* <Upload
            action= {mockData.results}
            listType="picture-card"
            fileList={fileList} //上傳列表檔案
            onChange={handleChange}
          >
            Upload
          </Upload> */}
        </Form.Item>
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

export default EditModal;
