import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace, List, Switch, InputItem, Button} from 'antd-mobile';
import {isNumber} from '../../utils/number';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps; // avoid bug about keyboard 
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
class NetworkSetting extends Component{
  constructor() {
    super();
    this.state = {
      isStart: true,
      cycleLength: 1800000,
      isCycleLength: true,

      isNetworkSubmitShow: true
    }
  }

  handleCycleChange(value) {
    if(isNumber(value)) {
      this.setState({
        cycleLength: value * 60000,
        isNetworkSubmitShow: true
      });
    }else if(value.length === 0 ) {
      this.setState({
        isNetworkSubmitShow: false
      })
    }else{
      alert('请输入数字！');
      this.setState({
        isNetworkSubmitShow: false
      })
    }
    
  }
  render() {
    const {isStart, cycleLength, isNetworkSubmitShow} = this.state;
    return(
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="网络扫描模块"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span>Module</span>}
            />
            <Card.Body>
              <List>
                <List.Item extra={
                  <Switch checked={isStart}
                      onChange={() => {
                        this.setState({ isStart: !isStart,});
                      }}
                  />}
                >开启自动扫描</List.Item>
                <InputItem
                  type='money'
                  defaultValue={cycleLength/60000}
                  placeholder="分钟"
                  clear
                  onChange={(value) => this.handleCycleChange(value)}
                  onBlur={(value) => this.handleCycleChange(value)}
                  moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                >扫描周期</InputItem>
              </List>
              <Button type="primary" disabled={!isNetworkSubmitShow}>提交</Button><WhiteSpace />
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default NetworkSetting;