import React, {Component} from 'react';
import NetworkUser from './networkUser';
import NetworkSpeed from './networkSpeed';
import Monitor from './monitor';
import PropTypes from 'prop-types';
class ModulesList extends Component{
  constructor() {
    super();
  }
  renderModule() {
    const moduleName = this.props.match.params.moduleName;
    if(moduleName === 'wifiuser') {
      return <NetworkUser {...this.props}/>
    } else if (moduleName === 'wifispeed') {
      return <NetworkSpeed {...this.props} />
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