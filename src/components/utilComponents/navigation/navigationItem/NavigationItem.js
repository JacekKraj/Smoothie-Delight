import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navigationItem.module.scss";

const NavigationItem = (props) => {
  return (
    <NavLink to={`/${props.path}`} exact className={classes.navigationItemComponent} activeClassName={classes.navItemActive}>
      <div>{props.text}</div>
    </NavLink>
  );
};

export default NavigationItem;
