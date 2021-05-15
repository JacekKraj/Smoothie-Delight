import React from "react";

import classes from "./mainPage.module.scss";
import Navgiation from "./../utilComponents/navigation/Navigation";
import Backdrop from "./../UI/backdrop/Backdrop";

const MainPage = () => {
  return (
    <div>
      <div className={classes.backdropContainer}>
        <Backdrop />
      </div>
      <Navgiation />
    </div>
  );
};

export default MainPage;
