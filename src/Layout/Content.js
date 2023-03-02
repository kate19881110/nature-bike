import React from "react";
import { Routes, Route } from "react-router-dom";
import Bike from "../containers/Bike/Bike";
import Dashboard from "../containers/Society/Dashboard";
import BikeRoute from "../containers/Bike/BikeRoute";
import SocietyList from "../containers/Marketing/SocietyList";
import ActivityInfo from "../containers/Marketing/ActivityInfo";
import Charge from "../containers/Society/Charge";
import Account from "../containers/Society/Account";
import NotFound from "./NotFound";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Reimburse from "../containers/Reimburse";

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="home" element={<Home />} />
        <Route exact path="bike/Activity" element={<BikeRoute />} />
        <Route exact path="bike/map" element={<Bike />} />
        <Route exact path="society/account" element={<Account />} />
        <Route exact path="society/dashboard" element={<Dashboard />} />
        <Route exact path="society/charge" element={<Charge />} />
        <Route exact path="market/list" element={<SocietyList />} />
        <Route exact path="market/info" element={<ActivityInfo />} />
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="/account/reimburse" element={<Reimburse />} />
        <Route exact path="404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Content;
