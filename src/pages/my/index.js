import React, {Component} from 'react';
import { List } from 'antd-mobile';
import './style.less';
const Item = List.Item;
const Brief = Item.Brief;
class Modules extends Component{
  render() {
    return (
      <div>
        <div className='my-header'>
          <div className='hello-text'>Respberry Security Home 1.0</div>
          {/* <div className='modify-passwd'>修改密码</div> */}
        </div>
        <List renderHeader={() => '您的当前状态'} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            当前用户<Brief>Leon Chen</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            当前IP地址 <Brief>192.168.88.18</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => {}}
          >
            当前MAC地址<Brief>dc:36:22:21:55</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => {}}
          >
            登录历史记录
          </Item>
          

        </List>

      </div>);
  }
}

export default Modules;
