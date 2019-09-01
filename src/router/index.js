import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import About from "../pages/About";
import Home from "../pages/Home";
import App from "../App.js";
import Admin from "../admin";

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Admin>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/login"></Redirect>
              </Switch>
            </Admin>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
