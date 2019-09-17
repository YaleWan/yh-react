import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import User from "../pages/User";
import Home from "../pages/Home";
import App from "../App.js";
import Admin from "../admin";
import Role from "../pages/Role";
import Menu from "../pages/Menu";

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/user" component={User} />
                    <Route path="/home" component={Home} />
                    <Route path="/role" component={Role} />
                    <Route path="/menu" component={Menu} />
                    <Redirect to="/login" />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
