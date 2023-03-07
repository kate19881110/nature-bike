import React, { createContext, useContext, useState } from "react";


// export const [clubFees, setClubFees] = useState({
//     applyDate: "",
//     staffName: "",
//     staffEditor: "",
//     typeOptions: 1,
//     fundSource: 1,
//     paymentWay: 1,
//     needDate: "",
//     sendAddress: 1,
//     askPaymentDate: "",
//     projectNum: "",
//     projectItem: "",
//     untaxedMoney: 0,
//     businessTax: 0,
//     remark: '',
//     subtotal: 0, 
//     sumtotal: 0
//   });

  const userChargeInfoContext = createContext({
    applyDate: "",
    staffName: "",
    staffEditor: "",
    typeOptions: 1,
    fundSource: 1,
    paymentWay: 1,
    needDate: "",
    sendAddress: 1,
    askPaymentDate: "",
    projectNum: "",
    projectItem: "",
    untaxedMoney: 0,
    businessTax: 0,
    remark: '',
    subtotal: 0, 
    sumtotal: 0
  });

export default userChargeInfoContext;
