import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => (
  <ul className={styles.list}>
    <li className={styles.listElement}>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.listElement}>
      <NavLink
        to="/movie"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Movie
      </NavLink>
    </li>
  </ul>
);

export default Nav;
