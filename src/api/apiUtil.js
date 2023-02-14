import axios from "axios";
import { message } from "antd";
import { setToken } from "../utils/auth";

const userRequest = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

const successPOP = (content) => {
  message.open({
    type: "success",
    content: `${content}成功`,
  });
};

const failPOP = (content) => {
  message.open({
    type: "error",
    content: `${content}失敗`,
  });
};
export const login = (account, password) => {
  userRequest
    .post("/users", {
      userMail: account,
      userPwd: password,
    })
    .then((res) => {
      res.status = 200;
      const token = `${account}ABCD${password}`;
      setToken(token);
      successPOP("登入");
    })
    .catch((err) => {
      failPOP("登入");
      err.toString();
    });
};

export const register = (name, dept, mail, password) => {
  userRequest.post(
    "/users",
    {
      userName: name,
      userDept: dept,
      userMail: mail,
      userPwd: password,
    }
      .then((res) => res.data)
      .catch((err) => err.toString())
  );
};
