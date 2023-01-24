import React, { useState } from 'react';
import {
  List, Switch, Popconfirm, Avatar, message,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as Style from './style';

function ToolItem(listData) {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const confirm = (e) => {
    message.success(`${e}刪除成功!`);
  };

  const cancel = (e) => {
    message.error(e, '取消刪除!');
  };
  const { email, picture, name } = listData;
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
