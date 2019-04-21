import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import './style.less'
class BottomTabbar extends Component {
  constructor(props) {
    super(props);
    let prepopPage; // pre-pop-pagename 
    if (this.props.history.location.pathname === '/') {
      prepopPage = this.props.tabs[0].lowerName;
    } else {
      prepopPage = this.props.history.location.pathname.substring(1);
    }

    this.state = {
      selectedTab: prepopPage,
      hidden: false,
      fullScreen: false,
    };
    this._switchPage = this.switchPage.bind(this);
  }
  
  switchPage(pageName) {
    pageName = pageName.toLowerCase();
    this.props.history.push('/'+pageName);
  }

  renderTabs = (tabs) => {
    let list = [];
    for (let tab of tabs) {
      let tabComponent = tab.componentName;
      let tabLower = tab.lowerName;
      list.push(
        <TabBar.Item
          title={tabComponent}
          key={tabComponent}
          icon={<div className={`icon-bottom icon-bottom--${tabLower}`}></div>}
          selectedIcon={<div className={`icon-bottom icon-bottom--${tabLower}-select`}/>}
          selected={this.state.selectedTab === tabLower}
          onPress={() => {
            this._switchPage(tabLower);
            this.setState({selectedTab: tabLower,});
          }}
        >
        {this.props.page}
        </TabBar.Item>);
    };
    return list;
  }
  render() {
    const {tabs} = this.props;
    return (
      <React.Fragment>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
        {this.renderTabs(tabs)}
        </TabBar>
    </React.Fragment>
    );
  }
}

export default BottomTabbar;

