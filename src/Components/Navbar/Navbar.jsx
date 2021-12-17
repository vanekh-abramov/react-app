import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul>
            <NavLink className={styles.nav_link} to="/profile">
              <li className={styles.nav_item}>Profile</li>
            </NavLink>
            <NavLink className={styles.nav_link} to="/dialogs">
              <li className={styles.nav_item}>Messages</li>
            </NavLink>
            <NavLink className={styles.nav_link} to="/news">
              <li className={styles.nav_item}>News</li>
            </NavLink>
            <NavLink className={styles.nav_link} to="/music">
              <li className={styles.nav_item}>Music</li>
            </NavLink>
            <NavLink className={styles.nav_link} to="/settings">
              <li className={styles.nav_item}>Settings</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
