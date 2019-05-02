import React, {Component} from 'react';
import {List, Icon} from 'antd-mobile';
import './style.less';
const Item = List.Item;
class LogList extends Component{
  constructor() {
    super();
    this.state = {
      data: []
    } 
  }
  componentWillMount() {
    this.loadData();
  }

  componentWillReceiveProps(nextProps) {
    this.loadData(nextProps.isValidShow);
  }

  async loadData(isValidShow = true) {
    let data;
    if(isValidShow) {
      data = await this.props.handleValidDataShow();
      this.setState({data: data})
    }else{
      data = await this.props.handleInvalidDataShow();
      this.setState({data: data})
    }
  }

  render() {
    return (
      <List>
        {this.state.data.map((item, i) => {
          return (
            <Item key={i} extra={<Icon className="icon-right" type={"right"} />}>
              <div className="list-main">
                <div>{item.macAddress ? item.macAddress : 'undefined'}</div>
                <div>{item.noteName ? item.noteName : 'undefined'}</div>
              </div>
            </Item>)
        })}
        
      </List>
    );
  }
}
export default LogList;