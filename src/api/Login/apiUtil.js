import axios from "axios";
import { message } from "antd";
import { setToken } from "../../utils/auth";

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
export const loginAPI = (account, password) => {
  userRequest
    .post("/users", {
      userMail: account,
      userPwd: password,
    })
    .then((res) => {
      console.log("res", res);
      res.status = 200;
      const token = `${account}ABCD${password}`;
      setToken(token);
      successPOP("登入");
    })
    .catch((err) => {
      failPOP("登入");
      console.log("login error", err.toString());
    });
};

export const registerAPI = (userName, userDepartment, userMail, userPassword) => {
  userRequest.post(
    "/users",
    {
      userName,
      userDept: userDepartment,
      userMail,
      userPwd: userPassword,
    })
      .then((res) => {
        res.status = 200;
        successPOP("註冊");
      })
      .catch((err) => {
        failPOP("註冊");
        console.log("login error", err.toString());
      })
};
