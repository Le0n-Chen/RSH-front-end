import React, { Component } from 'react';
import './App.css';
import './model';
import Home from './pages/home';
import Modules from './pages/modules';
import Setting from './pages/setting';
import My from './pages/my';
import mirror from 'mirrorx';
import BottomTabbar from './pages/common/bottomTabbar';
import { Tabs } from './contant/config';
let {withRouter, Switch, Route, connect} = mirror;


class App extends Component {
  constructor() {
    super();
  }

  render() {
    const page = (
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/home' component = {Home} />
        <Route path='/modules' component = {Modules} />
        <Route path='/setting' component = {Setting} />
        <Route path='/my' component = {My} />
      </Switch>
    )
    return (
      <div className="App">
          <BottomTabbar history={ this.props.history } tabs={Tabs} page={page}/>
      </div>
    );
  }
}

const Root = withRouter(
  connect((state) => {
    return state.app;
  })(App));

export default Root;
