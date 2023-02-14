import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from "../containers/Bike/views/Map";
import Dashboard from "../containers/Dashboard";

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="bike/map" element={<Map />} />
        <Route exact path="crm/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Content;
