import React, {Component} from 'react';
import { Card, WingBlank, DatePicker, List } from 'antd-mobile';
import DatePickerChildren from '../common/datePickerChildren';
import './style.less';
class Home extends Component{
  constructor() {
    super();
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    this.state={
      date: now
    }
  }
  render() {
    const Item = List.Item;
    return (
      <div>
        <WingBlank size="lg" className="all-scan-ui">
          <Card>
            <Card.Header
              title="树莓派状态总览"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={
                  <DatePicker
                      mode="date"
                      title="Select Date"
                      extra="Optional"
                      value={this.state.date}
                      onChange={date => this.setState({ date })}
                    >
                    <DatePickerChildren />
                  </DatePicker>
              }
            />
            <Card.Body>
              <List className="my-list">
                <Item extra={'53℃'}>CPU温度</Item>
                <Item extra={'13.5%'}>CPU占用情况</Item>
                <Item extra={'896M'}>内存总大小</Item>
                <Item extra={'33M'}>已使用内存大小</Item>
                <Item extra={'59G'}>硬盘总空间</Item>
                <Item extra={'2.3G'}>硬盘已使用空间</Item>
              </List>
            </Card.Body>
            <Card.Footer />
          </Card>
        </WingBlank>
        <WingBlank size="lg" className='back-end-ui'>
          <Card>
            <Card.Header
              title="后台运行状态"
            />
            <Card.Body>
              <List className="my-list">
                <Item extra={'avtive'}>java后台运行状态</Item>
                <Item extra={'1:50:10'}>java后台运行时长</Item>
                <Item extra={'active'}>摄像头运行状态</Item>
                <Item extra={'1:50:08'}>摄像头开启时长</Item>
              </List>
            </Card.Body>
            <Card.Footer />
          </Card>
        </WingBlank>
      </div>
    )
  }
}

export default Home;
