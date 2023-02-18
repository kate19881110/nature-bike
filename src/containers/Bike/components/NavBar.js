import React, {useState} from "react";
import { Radio } from 'antd';

function NavBar() {
  const [bikeMenu, setBikeMenu] = useState("單車租借");
    const navLinkInfo = [
        {
            label: "單車租借",
            value: "單車租借"
          },
          {
            label: "單車路線",
            value: "單車路線"
          },
          {
            label: "單車景點",
            value: "單車景點"
          },
    ];
    const bikeChange = ({target: {value}}) => {
      setBikeMenu(value);
    }
    return (
        <div>
            <Radio.Group
              options={navLinkInfo}
              onChange={bikeChange}
              value={bikeMenu}
              optionType="button"
              buttonStyle="solid"
            />
        </div>
    )
}

export default NavBar
