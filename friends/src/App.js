import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";

import LoginForm from "./components/LoginForm";
import Friend from "./components/Friend";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute>
          <Route path='/friends' component={Friend}/>
        </PrivateRoute> exact path="/friends" component={Friend}>
      </Switch>
    </div>
  );
}

export default App;
