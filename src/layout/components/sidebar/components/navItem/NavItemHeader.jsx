import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './navItem.module.css';
import { ChevronDownIcon } from '@heroicons/react/outline';

const resolveLinkPath = (childTo, parentTo) => `${parentTo}/${childTo}`;

const NavItemHeader = props => {
  const { item } = props;
  const { label, Icon, to: headerToPath, children } = item;
  const location = useLocation();

  const [expanded, setExpand] = useState(
    location.pathname.includes(headerToPath)
  );

  const onExpandChange = e => {
    e.preventDefault();
    setExpand(expanded => !expanded);
  };

  return (
    <>
      <button
        className={`${style.navItem} ${style.navItemHeaderButton}`}
        onClick={onExpandChange}
      >
        <Icon className={style.navIcon} />
        <span className={style.navLabel}>{label}</span>
        <ChevronDownIcon
          className={`${style.navItemHeaderChevron} ${
            expanded && style.chevronExpanded
          }`}
        />
      </button>

      {expanded && (
        <div className={style.navChildrenBlock}>
          {children.map((item, index) => {
            const key = `${item.label}-${index}`;

            const { label, Icon, children } = item;

            if (children) {
              return (
                <div key={key}>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: resolveLinkPath(item.to, props.item.to),
                    }}
                  />
                </div>
              );
            }

            return (
              <NavLink
                key={key}
                to={resolveLinkPath(item.to, props.item.to)}
                className={style.navItem}
                activeClassName={style.activeNavItem}
              >
                <Icon className={style.navIcon} />
                <span className={style.navLabel}>{label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavItemHeader;
