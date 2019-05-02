import React, {Component} from 'react';
import {List, Icon} from 'antd-mobile';
import './style.less';
const Item = List.Item;
class LogList extends Component{
  constructor(props) {
    super();
    this.state = {
      data: []
    } 
  }
  componentWillMount() {
    this.loadData();
  }

  async loadData() {
    const {validData, invalidData, isValidShow} = this.props;
    let data;
    if(isValidShow) {
      data = await this.props.handleAllowedDataShow();
      this.setState({data: data})
      console.log('data:', data);
    }else{
      data = this.props.handleInvalidShow;;
    }
  }
  render() {
    return (
      <List>
        {this.state.data.map((item) => {
          return (
            <Item extra={<Icon className="icon-right" type={"right"} />}>
              <div className="list-main">
                <div>{item.macAddress ? item.macAddress : 'undefined'}</div>
                <div>{item.name ? item.name : 'undefined'}</div>
              </div>
            </Item>)
        })}
        
      </List>
    );
  }
}
export default LogList;