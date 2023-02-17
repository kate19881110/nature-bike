import React from "react";
import { Routes, Route } from "react-router-dom";
import Bike from "../containers/Bike/Bike";
import Dashboard from "../containers/Dashboard";
import NavBar from "../containers/Bike/components/NavBar";

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="bike/site" element={<NavBar />} />
        <Route exact path="bike/map" element={<Bike />} />
        <Route exact path="crm/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Content;
