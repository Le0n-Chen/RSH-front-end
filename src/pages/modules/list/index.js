import React, {Component} from 'react';
import WifiUser from './wifiUser';
import WifiSpeed from './wifiSpeed';
import Monitor from './monitor';
import PropTypes from 'prop-types';
class ModulesList extends Component{
  constructor() {
    super();
  }
  renderModule() {
    const moduleName = this.props.match.params.moduleName;
    console.log(moduleName);
    if(moduleName === 'wifiuser') {
      return <WifiUser {...this.props}/>
    } else if (moduleName === 'wifispeed') {
      return <WifiSpeed {...this.props} />
    } else if(moduleName === 'monitor') {
      return <Monitor {...this.props} />
    } else {
      return <div>暂无此功能模块</div>
    }
  }
  render() {
    return (
      <div>
      {this.renderModule()}
      </div>
    )
  }
}
ModulesList.propTypes = {
  match: PropTypes.object
}
export default ModulesList;