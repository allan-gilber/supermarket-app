import React from 'react';
import {Menu} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}
// const divider = {type: 'divider'};
const items = [
  getItem('My Orders', 'NavigationOne', <ShoppingCartOutlined/>)
  // divider
];

export const DropDownMenu = (<Menu
  style={{textAlign: 'center'}}
  items={items}
/>
);