import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from "./containers/Login/index";
import Register from "./containers/Login/Register";
import ForGetPwd from "./containers/Login/ForgetPwd/index";
import { isLogined } from "./utils/auth";
import BasicLayout from "./Layout/BasicLayout.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={isLogined ? <BasicLayout /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPwd" element={<ForGetPwd />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
