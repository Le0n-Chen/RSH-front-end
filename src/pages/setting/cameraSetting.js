import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace, List, Radio, Button} from 'antd-mobile';
const RadioItem = Radio.RadioItem;

class CameraSetting extends Component{
  constructor() {
    super();
    this.state = {
      cameraFunction: '是否打开监控功能'
    }
  }
  render() {
    const {value2} = this.state;
    const data2 = [
      { value: 0, label: '摄像头基础功能', extra: '可远程查看家庭状况，websocket较流畅' },
      { value: 1, label: '摄像头进阶功能', extra: '人脸识别。树莓派性能有限，人脸识别算法不够完善，置信度较低， 而且会很卡' },
    ];
    return(
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="摄像头模块"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span>Camera</span>}
            />
            <Card.Body>
              <List>
                  {data2.map(i => (
                    <RadioItem key={i.value} checked={value2 === i.value} onChange={(value) => this.onChange2(i.value)}>
                      {i.label}<List.Item.Brief>{i.extra}</List.Item.Brief>
                    </RadioItem>
                ))}
              </List>
              <Button type="primary">提交</Button><WhiteSpace />
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default CameraSetting;