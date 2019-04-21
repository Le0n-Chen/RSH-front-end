import React, {Component} from 'react';
import { Card, WingBlank, DatePicker } from 'antd-mobile';
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
    return (
      <div>
        <title className="title-home">Raspberry Pi Status</title>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title="Status"
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
              <div>This is content of `Card`</div>
            </Card.Body>
            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
        </Card>
        
      </WingBlank>
    </div>
    )
  }
}

export default Home;
