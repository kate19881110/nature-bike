import React, { useState } from 'react';
import {
  List, Switch, Popconfirm, Avatar, message,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import {successPOP, failPOP, deleteAccount} from '../../../../api/apiUtil';
import * as Style from './style';

function ToolItem({listData}) {
  const { id, email, picture, name } = listData;
  const [disabled, setDisabled] = useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const confirm = () => {
    deleteAccount(id);
    window.location.reload();
  };

  const cancel = () => {
    console.log("取消刪除", id)
  };
  
  return (
    <List.Item key={email}>
      <List.Item.Meta
        avatar={<Avatar src={picture} />}
        title={<a href="https://ant.design">{name}</a>}
        description={email}
      />
      <Style.EditItem>
        <Switch
          checkedChildren="編輯中"
          unCheckedChildren="關閉"
          onChange={toggle}
        />
        {/* <Button type="primary" onClick={toggle}>
          Edit
        </Button> */}
        <Popconfirm
          title="請問要刪除嗎?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />
        </Popconfirm>
      </Style.EditItem>
    </List.Item>
  );
}

export default ToolItem;
