import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as base from '@pages/base'
import mirror from 'mirrorx';
let {withRouter, Switch, Route, connect, actions} = mirror;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' component = { base.login } />
        </Switch>
      </div>
    );
  }
}

export default App;
