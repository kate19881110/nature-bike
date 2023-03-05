import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Map from "../containers/Bike/Map";
=======
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Reimburse from "../containers/Charge";
import Bike from "../containers/Bike/Bike";
>>>>>>> Charge/UI
import Dashboard from "../containers/Society/Dashboard";
import BikeRoute from "../containers/Bike/BikeRoute";
import SocietyList from "../containers/Info/SocietyList";
import ActivityInfo from "../containers/Info/ActivityInfo";
import Member from "../containers/Society/Member";
import NotFound from "./NotFound";

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="home" element={<Home />} />
<<<<<<< HEAD
        <Route exact path="bike/Activity" element={<BikeRoute />} />
        <Route exact path="bike/map" element={<Map />} />
        <Route exact path="society/account" element={<Account />} />
        <Route exact path="society/dashboard" element={<Dashboard />} />
        <Route exact path="society/charge" element={<Charge />} />
        <Route exact path="market/list" element={<SocietyList />} />
        <Route exact path="market/info" element={<ActivityInfo />} />
=======
>>>>>>> Charge/UI
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="society/member" element={<Member />} />
        <Route exact path="society/dashboard" element={<Dashboard />} />
        <Route exact path="society/progress" element="" />
        <Route exact path="bike/map" element={<Bike />} />
        <Route exact path="bike/activity" element={<BikeRoute />} />
        <Route exact path="info/news" element={<ActivityInfo />} />
        <Route exact path="info/list" element={<SocietyList />} />
        <Route exact path="charge/reimburse" element={<Reimburse />} />
        <Route exact path="404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Content;
