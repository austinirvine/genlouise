import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Reviews from './views/Reviews/Reviews';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard"/>
        <Route component={Dashboard} exact path="/dashboard"/>
        <Route component={Reviews} exact path="/about"/>
      </Switch>
    );
  }
}
