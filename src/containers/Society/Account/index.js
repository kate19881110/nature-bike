import React from "react";
import { Card, Row, Col, Button, Form } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
import TodoList from "./TodoList";
import useModal from "../../../hook/useModal";
import EditModal from "./EditModal/EditModal";

function Customer() {

  const editDataModal = useModal({});
  const [form] = Form.useForm();

  const handleAccount = () => {
    editDataModal.openModal();
  };

  return (
    <>
      <EditModal {...editDataModal} onOk={() => form.submit()} />
      <Row justify="center" align="middle">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="戶外俱樂部" bordered={false}>
            <AddTodoForm />
          </Card>
        </Col>
      </Row>
      <Row justify="center" align="middle">
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
            <TodoList />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Customer;
