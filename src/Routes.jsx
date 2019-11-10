import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Home from './views/Home/index';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard"/>
        <Route component={Dashboard} exact path="/dashboard"/>
        <Route component={Home} exact path="/home"/>
      </Switch>
    );
  }
}
