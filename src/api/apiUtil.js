import axios from "axios";
import { message } from "antd";
import { setToken } from "./axios/auth";

export const userRequest = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export const successPOP = (content) => {
  message.open({
    type: "success",
    content: `${content}成功`,
  });
};

export const failPOP = (content) => {
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
      const token = `${account}ABCD${password}`;
      setToken(token);
      successPOP("登入");
      window.location.reload();
    })
    .catch((err) => {
      failPOP("登入");
      console.log("login error", err.toString());
    });
};

export const registerAPI = (
  userName,
  userDepartment,
  userSociety,
  userMail,
  userPassword
) => {
  userRequest
    .post("/users", {
      userName,
      userDept: userDepartment,
      userSociety,
      userMail,
      userPwd: userPassword,
    })
    .then((res) => {
      successPOP("註冊");
    })
    .catch((err) => {
      failPOP("註冊");
      console.log("register error", err.toString());
    });
};

export const forgetPwdAPI = (id, userPassword) => {
  userRequest
    .patch(`/users/${id}`, {
      userPwd: userPassword,
    })
    .then((res) => {
      successPOP("更改密碼");
    })
    .catch((err) => {
      failPOP("更改密碼");
      console.log("forgetPwd error", err.toString());
    });
};

export const addAccount = (id, gender, name, email) => {
  userRequest
    .post("/AccountList", {
      id,
      gender,
      name,
      email,
    })
    .then((res) => {
      successPOP("新增會員");
    })
    .catch((err) => {
      failPOP("新增會員");
      console.log("addAccount error", err.toString());
    });
};

export const editAccount = (id, userGender, userName, userEmail) => {
  userRequest
    .put(`/AccountList/${id}`, {
      id,
      gender: userGender,
      name: userName,
      email: userEmail
    })
    .then((res) => {
      successPOP("更新會員資料");
    })
    .catch((err) => {
      failPOP("更新會員資料");
      console.log("editAccount error", err.toString());
    });
};

export const deleteAccount = (id) => {
  userRequest
    .delete(`/AccountList/${id}`)
    .then((res) => {
      successPOP("刪除會員");
    })
    .catch((err) => {
      failPOP("刪除會員");
      console.log("deleteAccount error", err.toString());
    });
};
