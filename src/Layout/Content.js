import React from "react";
import { Routes, Route } from "react-router-dom";
import Bike from "../containers/Bike/Bike";
import Dashboard from "../containers/Society/Dashboard";
import NavBar from "../containers/Bike/components/NavBar";
import SocietyList from "../containers/Marketing/SocietyList";
import ActivityInfo from "../containers/Marketing/ActivityInfo";
import Charge from "../containers/Society/Charge";
import Home from "../containers/Home";

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="home" element={<Home />} />
        <Route exact path="bike/Activity" element={<NavBar />} />
        <Route exact path="bike/map" element={<Bike />} />
        <Route exact path="society/dashboard" element={<Dashboard />} />
        <Route exact path="society/charge" element={<Charge />} />
        <Route exact path="market/list" element={<SocietyList />} />
        <Route exact path="market/info" element={<ActivityInfo />} />
      </Routes>
    </div>
  );
}

export default Content;
