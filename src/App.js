import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";
import classes from "./app.module.scss";

const App = () => {
  return (
    <div className={classes.pageBackground}>
      <Switch>
        <Route path="/" exact component={() => <MainPage />} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
