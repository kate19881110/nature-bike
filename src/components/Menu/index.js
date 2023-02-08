import React from 'react';
import { Menu } from 'antd';
import menus from '../../api/mock/menus';

function MenuList() {
  return (
    <Menu
      mode="inline"
      theme="dark"
      items={menus}
      style={{
        width: 256,
        height: '100%',
      }}
    />
  );
}

export default MenuList;
