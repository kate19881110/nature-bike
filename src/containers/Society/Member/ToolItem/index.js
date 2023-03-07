import React, { useState } from "react";
import { List, Switch, Popconfirm, Avatar, Form } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { successPOP, failPOP } from "../../../../utils/message";
import useAxios from "../../../../hook/useAxios";
import api from "../../../../api";
import useModal from "../../../../hook/useModal";
import EditModal from "../EditMoadl";
import * as Style from "./style";

function ToolItem({ listData }) {
  const { sendRequest: createData } = useAxios();
  const { id, email, picture, name } = listData;
  const [disabled, setDisabled] = useState(false);
  const [editData, setEditData] = useState([]);
  const editDataModal = useModal({});
  const [form] = Form.useForm();

  const getData = () => {
    createData(
      {
        url: `${api.Society.MemberList}/${id}`,
        method: api.Method.Get,
      },
      (res) => {
        setEditData(res);
      },
      (err) => {
        console.log("getData error", err.toString());
      }
    );
  };

  const deleteAccount = () => {
    createData(
      {
        url: `${api.Society.MemberList}/${id}`,
        method: api.Method.Delete,
      },
      (res) => {
        successPOP("刪除會員");
      },
      (err) => {
        failPOP("刪除會員");
        console.log("deleteAccount error", err.toString());
      }
    );
  };

  const toggle = () => {
    setDisabled(!disabled);
    editDataModal.openModal();
    getData();
  };

  const confirm = () => {
    deleteAccount(id);
    window.location.reload();
  };

  const cancel = () => {
    console.log("取消刪除", id);
  };


  return (
    <>
      <EditModal {...editDataModal} onOk={() => form.submit()} editInfo={editData} />
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
            <DeleteOutlined style={{ fontSize: "16px", color: "red" }} />
          </Popconfirm>
        </Style.EditItem>
      </List.Item>
    </>
  );
}

export default ToolItem;
