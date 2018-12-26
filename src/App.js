import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './model';
import * as window from './pages/window'
import mirror from 'mirrorx';
let {withRouter, Switch, Route, connect, actions} = mirror;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component = { window.CommonWindow } />
        </Switch>
      </div>
    );
  }
}

const Root = withRouter(
  connect((state) => {
    return state.app;
  })(App));

export default Root;
