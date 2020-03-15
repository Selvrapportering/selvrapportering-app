import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

export const LoggedOutApp = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h1>Selvrapportering</h1>
          <p>Her kan du si ifra om du er bekreftet smittet</p>
          <Link to="/logg-inn">Logg inn</Link>
        </Route>
        <Route exact path="/logg-inn">
          Ikke helt klar til å logge deg inn enda. Sjekk tilbake om noen timer
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
