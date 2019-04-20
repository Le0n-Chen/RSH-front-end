import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './model';
import Home from './pages/home'
import mirror from 'mirrorx';
import BottomTabbar from './pages/common/bottomTabbar';
let {withRouter, Switch, Route, connect, actions} = mirror;


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path='/' exact component = { Home } />
          </Switch>
          <BottomTabbar />
      </div>
    );
  }
}

const Root = withRouter(
  connect((state) => {
    return state.app;
  })(App));

export default Root;
