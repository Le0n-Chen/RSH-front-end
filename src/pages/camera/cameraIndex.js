import React, { Component } from 'react';
import { Card, WhiteSpace, DatePicker, List } from 'antd-mobile';
import DatePickerChildren from '../common/datePickerChildren';
import {formatDate} from '../../utils/string';
const Item = List.Item;
class CameraIndex extends Component {
  constructor() {
    super();
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    this.state={
        date: now,
        formatDate: formatDate(now),
        isValidShow: true,
    }
    this._handleScanPicture = this.handleScanPicture.bind(this);
  }
  handleScanPicture() {
    this.props.history.push(`${this.props.match.url}/picture`);
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
                    onChange={this._handleDateChange}
                    >
                    <DatePickerChildren />
                </DatePicker>
            }
            />
            <Card.Body>
              <List className="my-list">
                <Item extra={'5张'}>今日感应图片数</Item>
                <Item extra={'开启'}>人脸识别状态</Item>
                <Item extra={'5人'}>进门人员</Item>
                <Item extra={'1人'}>未识别人员</Item>
              </List>
            </Card.Body>
            <Card.Footer 
              content={<button className="live-button bottom-button">进入直播</button>} 
              extra={<button className="scan-button bottom-button" 
              onClick={this._handleScanPicture}>查看图片</button>} />
          </Card>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default CameraIndex;
