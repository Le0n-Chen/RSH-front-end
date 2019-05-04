import React, {Component} from 'react';
import CameraSetting from './cameraSetting';
import NetworkSetting from './networkSetting';
class Home extends Component{
  render() {
    return (
      <div>
        <NetworkSetting />
        <CameraSetting />
      </div>
    );
  }
}

export default Home;
