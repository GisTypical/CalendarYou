import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./homepage/index";
import About from "./about/index";
import Login from "./login/index";
import Signup from "./signup/index";
import Dashboard from "./dashboard/Index";
import UserContext from "./common/UserContext";

export const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="text-white text-opacity-90">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/signup/new" exact component={Signup} />
          <UserContext.Provider value={{ username, setUsername }}>
            <Route path="/login/user" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
