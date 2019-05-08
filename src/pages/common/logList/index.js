import React, {Component} from 'react';
import {List, Icon} from 'antd-mobile';
import './style.less';
import PopoverR from '../popOverR';
const Item = List.Item;
class LogList extends Component{
  constructor() {
    super();
    this.state = {
      data: []
    } 
  }
  componentWillMount() {
    this.loadData(true);
  }

  componentWillReceiveProps(nextProps) {
    this.loadData(nextProps.isValidShow);
    
  }

  async loadData(isValidShow) {
    let data = [];
    if(isValidShow) {
      data = await this.props.handleValidDataShow(isValidShow);
      data && this.setState({data: data})
    }else{
      data = await this.props.handleInvalidDataShow(isValidShow);
      data && this.setState({data: data})
    }
  }

  render() {
    const Popover = this.props.rightItem;
    return (
      <List>
        {this.state.data.map((item, i) => {
          return (
            <Item key={i} extra={<Popover />}>
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