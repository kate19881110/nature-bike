import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home";
import Profile from "../../containers/Profile";
import Reimburse from "../../containers/Charge";
import Map from "../../containers/Bike/Map";
import Poster from "../../containers/Bike/Poster";
import Dashboard from "../../containers/Society/Dashboard"
import SocietyList from "../../containers/Info/SocietyList";
import ActivityInfo from "../../containers/Info/ActivityInfo";
import Member from "../../containers/Society/Member";
import Charge from "../../containers/Society/Charge";
import Progress from "../../containers/Society/Progress";
import NotFound from "../NotFound";

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="home" element={<Home />} />
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="society/member" element={<Member />} />
        <Route exact path="society/dashboard" element={<Dashboard />} />
        <Route exact path="society/charge" element={<Charge />} />
        <Route exact path="society/progress" element={<Progress />} />
        <Route exact path="bike/map" element={<Map />} />
        <Route exact path="bike/activity" element={<Poster />} />
        <Route exact path="info/news" element={<ActivityInfo />} />
        <Route exact path="info/list" element={<SocietyList />} />
        <Route exact path="charge/reimburse" element={<Reimburse />} />
        <Route exact path="404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Content;
