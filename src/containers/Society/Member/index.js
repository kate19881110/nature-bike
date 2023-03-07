import React, { useState } from "react";
import { Card, Row, Col, Button, Form, Input } from "antd";
import { PlusCircleFilled, SearchOutlined } from "@ant-design/icons";
import { failPOP } from "../../../utils/message";
import TodoList from "./TodoList";
import useModal from "../../../hook/useModal";
import AddModal from "./AddModal";
import useAxios from "../../../hook/useAxios";
import api from "../../../api";

function Customer() {
  const { sendRequest: createData } = useAxios();
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const addDataModal = useModal({});
  const [form] = Form.useForm();

  const handleAccount = () => {
    addDataModal.openModal();
  };

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const updateListData = () => {
    createData(
      {
        url: api.Society.MemberList,
        method: api.Method.Get,
      },
      (res) => {
        setData(res);
      },
      (err) => {
        failPOP("讀取會員資料");
        console.log("register error", err.toString());
      }
    );

  };

  const handleList = () => {
    return data.forEach((item) => {
      if (item.name === searchData || item.email === searchData) {
        const dataList = [];
        dataList.push(item);
        return setData(dataList);
      } if (searchData === "") {
        return updateListData();
      }
      return ""      
    });
  };

  return (
    <>
      <AddModal {...addDataModal} onOk={() => form.submit()} />
      <Row justify="center" align="middle">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="戶外俱樂部" bordered={false}>
            <Form form={form} layout="horizontal" className="todo-form">
              <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                  <Form.Item
                    name="name"
                    rules={[
                    { required: true, message: "This field is required" },
                  ]}
                  >
                    <Input
                      placeholder="請輸入會員 Email ...."
                      value={searchData}
                      onChange={handleSearch}
                      allowClear
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleList}
                    block
                  >
                    <SearchOutlined />
                    搜尋
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{ margin: "16px 0" }}>
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card
            title="會員清單"
            extra={
              <Button type="primary" onClick={handleAccount} block>
                <PlusCircleFilled />
                新增會員
              </Button>
            }
            bordered={false}
          >
            <TodoList listDataInfo={data} dataFn={updateListData} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Customer;
