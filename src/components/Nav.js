import React from "react";
import Account from "./Account";
import classes from "../styles/Nav.module.css";
import logo from '../assets/images/logo-bg.png';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class={classes.nav}>
      <ul>
        <li>
          <Link to="/" class={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
