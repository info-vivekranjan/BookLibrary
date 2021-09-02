import React from "react";
import { Route, Switch } from "react-router-dom";
import { Library } from "./Library";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Library />
      </Route>
    </Switch>
  );
}

export { Routes };
