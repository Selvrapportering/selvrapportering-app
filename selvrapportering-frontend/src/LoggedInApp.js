import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export const LoggedInApp = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h1>Selvrapportering (innlogget)</h1>
          <p>Her kan du si ifra om du er bekreftet smittet</p>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
