import React from "react";

 export const BikeContext = React.createContext({
  name: "",
  authorityName: "",
  city: "",
  cyclingLength: 0,
  start: "",
  end: "",
});


export const ChargeContext = React.createContext({
  name: "",
  society: "",
  chargeStatus: "",
  date: ""
});
