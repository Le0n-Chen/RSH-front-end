import React, {Component} from 'react';
import echarts from 'echarts';
import {DatePicker, Card} from 'antd-mobile';
import DatePickerChildren from '../../common/datePickerChildren';

import '../style.less';

class WifiUser extends Component{
  constructor() {
    super();
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    this.state={
        date: now
    }
  }
  componentDidMount(){
      this.loadChart();
  }
  loadChart() {
    // console.log(this.chart)
    this.chartObj = echarts.init(this.chart)
    const option = {
        title: {
            text: '当日用户数量',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            x:50,
            y:45,
            x2:5,
            y2:20,
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}W'
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
                lte: 6,
                color: 'green'
            }, {
                gt: 6,
                lte: 8,
                color: 'red'
            }, {
                gt: 8,
                lte: 14,
                color: 'green'
            }, {
                gt: 14,
                lte: 17,
                color: 'red'
            }, {
                gt: 17,
                color: 'green'
            }]
        },
        series: [
            {
                name:'用电量',
                type:'line',
                smooth: true,
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                markArea: {
                    data: [ [{
                        name: '早高峰',
                        xAxis: '07:30'
                    }, {
                        xAxis: '10:00'
                    }], [{
                        name: '晚高峰',
                        xAxis: '17:30'
                    }, {
                        xAxis: '21:15'
                    }] ]
                }
            }
        ]
    };
    this.chartObj.setOption(option)
  } 

  render() {
    return (
        <div>
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
                    <div className="wifi-user-sum-echart" ref={c => this.chart = c}>
                
                    </div>
                </Card.Body>
                <Card.Footer />
            </Card>   
        </div>
    )
  }
}

export default WifiUser;
