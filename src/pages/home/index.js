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
        <title className="title-home">Raspberry Pi Status</title>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title="状态总览"
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
                <Item extra={'4v'}>当前电压</Item>
                <Item extra={'良好'}>网络状态</Item>
                <Item extra={'510-5G'}>WIFI名称</Item>
                <Item extra={'良好'}>摄像头状态</Item>
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
