import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './containers/Login/index';
import Register from './containers/Login/Register';
import ForGetPwd from './containers/Login/ForgetPwd/index';
import Menu from './components/Menu';
import Header from './components/Header';
import Map from './containers/Bike/views/Map';
import Dashboard from './containers/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPwd" element={<ForGetPwd />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/header" element={<Header />} />
        <Route path="/map" element={<Map />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
