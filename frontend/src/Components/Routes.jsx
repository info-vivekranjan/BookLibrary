import React from "react";
import { Route, Switch } from "react-router-dom";
import { Library } from "./Library";
import { LibraryDetails } from "./LibraryDetails";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Library />
      </Route>

      <Route path="/:id" exact>
        <LibraryDetails />
      </Route>
    </Switch>
  );
}

export { Routes };
