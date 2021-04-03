import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navItem.module.css';
import NavItemHeader from './NavItemHeader.jsx';

console.log({ style });
const NavItem = props => {
  const { label, Icon, to, children } = props.item;

  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <NavLink
      exact
      to={to}
      className={style.navItem}
      activeClassName={style.activeNavItem}
    >
      <Icon className={style.navIcon} />
      <span className={style.navLabel}>{label}</span>
    </NavLink>
  );
};

export default NavItem;
