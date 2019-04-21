import React, {Component} from 'react';
import {DatePicker, List} from 'antd-mobile';
import DatePickerChildren from '../common/datePickerChildren';
class Modules extends Component{
  constructor() {
    super();
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    this.state = {
      date: now
    }
  }
  render() {
    return (
      <div>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <DatePickerChildren />
        </DatePicker>
      </div>
      )
  }
}

export default Modules;
