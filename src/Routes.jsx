import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Reviews from './views/Reviews/Reviews';
import Home from './views/Home';
// import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Register from './views/Register'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard"/>
        <Route component={Dashboard} exact path="/dashboard"/>
        <Route component={Reviews} exact path="/about"/>
        {/* <Route component={Account} exact path="/account"/> */}
        <Route component={Settings} exact path="/settings"/>
        <Route component={SignUp} exact path="/sign-up"/>
        <Route component={SignIn} exact path="/sign-in"/>
        <Route component={Register} exact path="/register"/>
        <Route component={Home} exact path="/channels"/>
      </Switch>
    );
  }
}
