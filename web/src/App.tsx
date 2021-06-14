import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './homepage/index';
import About from './about/index'
import Login from './login/index'
export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" exact component={About} />
        <Route path="/signup/new" exact component={Homepage} />
        <Route path="/login/user" exact component={Login} />
        <Route path="/dashboard" exact component={Homepage} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;