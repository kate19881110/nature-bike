import React, { useState } from "react";
import { Radio } from "antd";
import transPortData from "../../../utils/transPortData";

function Nav() {
  const [bikeMenu, setBikeMenu] = useState("單車租借");
  const bikeChange = ({ target: { value } }) => {
    setBikeMenu(value);
  };
  return (
    <div>
      <Radio.Group
        options={transPortData.navLinkInfo}
        onChange={bikeChange}
        value={bikeMenu}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
}

export default Nav;
