import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import NotFound from './NotFound.js';

class Router extends Component {
  render() {
    return [
      <Switch>
        <Route exact path='/' render={ () => <Home /> } />
        <Route path='/about' render={ () => <About /> } />
        <Route path='/home' render={ () => <Redirect to='/' /> } />
        <Route path='/*' render={ () => <NotFound /> } />
      </Switch>
    ];
  }
}

export default Router;
