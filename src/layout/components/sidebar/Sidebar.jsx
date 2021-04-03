import React from 'react';
import style from './sidebar.module.css';
import NavItem from './navItem/NavItem.jsx';
import { sideMenu } from './menu.config.js';

const Sidebar = props => {
  return (
    <nav className={style.sidebar}>
      {sideMenu.map((item, index) => {
        return <NavItem key={`${item.label}-${index}`} item={item} />;
      })}
    </nav>
  );
};

export default Sidebar;
