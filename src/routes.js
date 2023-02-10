import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from "./containers/Bike/views/Map";
import Dashboard from "./containers/Dashboard";

export default () => {
  <Routes>
    <Route exact path="/map" element={<Map />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
  </Routes>;
};
