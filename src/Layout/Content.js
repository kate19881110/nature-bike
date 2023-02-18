import React from "react";
import { Routes, Route } from "react-router-dom";
import Bike from "../containers/Bike/Bike";
import Dashboard from "../containers/Dashboard";
import NavBar from "../containers/Bike/components/NavBar";
import SocietyList from "../containers/Marketing/SocietyList"

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="bike/Activity" element={<NavBar />} />
        <Route exact path="bike/map" element={<Bike />} />
        <Route exact path="society/dashboard" element={<Dashboard />} />
        <Route exact path="market/list" element={<SocietyList />} />
      </Routes>
    </div>
  );
}

export default Content;
