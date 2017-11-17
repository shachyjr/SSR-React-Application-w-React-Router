import React, { Component } from 'react';
import Header from './Header.js';
import Router from './Router.js';


class App extends Component {
  render() {
    return [
      <Header />,
      <Router />
    ];
  }
}

export default App;
