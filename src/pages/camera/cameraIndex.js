import React, { Component } from 'react';
import { Card, WhiteSpace, DatePicker, List } from 'antd-mobile';
import DatePickerChildren from '../common/datePickerChildren';
import { actions } from 'mirrorx';
import {formatDate} from '../../utils/string';
const Item = List.Item;
class CameraIndex extends Component {
  constructor(props) {
    super();
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    this.state={
        date: now,
        formatDate: props.formatDate,
        isValidShow: true,
    }
    this._handleScanPicture = this.handleScanPicture.bind(this);
    this._handleToLiveStream = this.handleToLiveStream.bind(this);
  }
  handleScanPicture() {
    this.props.history.push(`${this.props.match.url}/picture`);
  }
  handleToLiveStream() {
    this.props.history.push(`${this.props.match.url}/live`);
  }
  handleDateChange(date) {
    this.setState({ date });
    actions.app.changeFormatDate(date);
  }
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="Camera Data"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={
                <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={(date) => this.handleDateChange(date)}
                    >
                    <DatePickerChildren />
                </DatePicker>
            }
            />
            <Card.Body>
              <List className="my-list">
                <Item extra={'05:00:90'}>今日工作时长</Item>
                <Item extra={'5张'}>今日感应图片数</Item>
              </List>
            </Card.Body>
            <Card.Footer 
              content={<button className="live-button bottom-button" onClick={this._handleToLiveStream}>进入直播</button>} 
              extra={
                <button className="scan-button bottom-button" 
                  onClick={this._handleScanPicture}>查看图片</button>} />
          </Card>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default CameraIndex;
