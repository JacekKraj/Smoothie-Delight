import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navigation.module.scss";
import NavigationItem from "./navigationItem/NavigationItem";

const Navigation = () => {
  return (
    <div className={classes.navigationComponent}>
      <div className={classes.logoContainer}>
        <NavLink to="/" exact>
          <p>Smoothie Delight</p>
        </NavLink>
      </div>
      <div className={classes.navigationItems}>
        <NavigationItem text="Main page" path="" />
        <NavigationItem text="FAQ" path="FAQ" />
        <NavigationItem text="Contact" path="contact" />
      </div>
    </div>
  );
};

export default Navigation;
