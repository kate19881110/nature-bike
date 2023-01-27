import React, { useState, useEffect } from 'react';
import {
  Card, Row, Col, Button,
} from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import AddTodoForm from './AddTodoForm/AddTodoForm';
// import TodoList from './TodoList/TodoList';
import EditModal from './EditModal/EditModal';
// import mockData from './TodoList/mock.json';
import mockData from './TodoList/mock';

function Customer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const moreDataFn = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setData([...data, ...mockData.results]);
    setLoading(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    moreDataFn();
  }, []);

  return (
    <>
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
            extra={(
              <Button type="primary" onClick={showModal} block>
                <PlusCircleFilled />
                新增會員
              </Button>
            )}
            bordered={false}
          >
            {/* <TodoList listData={data || []} loadMoreData={moreDataFn} /> */}
          </Card>
        </Col>
      </Row>
      <EditModal openModal={isModalOpen} add={setData} />
    </>
  );
}

export default Customer;
