import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LoggedInApp } from "./LoggedInApp";
import { LoggedOutApp } from "./LoggedOutApp";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div>
      <BrowserRouter>
        {loggedIn ? <LoggedInApp /> : <LoggedOutApp />}
      </BrowserRouter>
      <button type="button" onClick={() => setLoggedIn(prev => !prev)}>
        Fake toggle logged in
      </button>
    </div>
  );
}

export default App;
