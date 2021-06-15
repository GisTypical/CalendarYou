import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./homepage/index";
import About from "./about/index";
import Login from "./login/index";
import Signup from "./signup/index";

export const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="text-white text-opacity-90">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/signup/new" exact component={Signup} />
          <Route path="/login/user" exact component={Login} />
          <Route path="/dashboard" exact component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
