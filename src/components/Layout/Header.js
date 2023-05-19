import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Go</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="food"
        />
      </div>
    </Fragment>
  );
}

export default Header;
