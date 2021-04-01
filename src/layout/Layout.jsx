import React from 'react';
import style from './layout.module.css';
import Sidebar from './components/sidebar/Sidebar.jsx';

const Layout = props => {
  const { children } = props;

  return (
    <div className={style.layout}>
      <header className={style.header}></header>
      <aside className={style.aside}>
        <Sidebar />
      </aside>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}></footer>
    </div>
  );
};

export default Layout;
