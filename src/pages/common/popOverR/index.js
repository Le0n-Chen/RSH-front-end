import React, { Component } from 'react';
import { Popover, Icon} from 'antd-mobile';
import './style.less';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class PopoverR extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
    this._handleVisibleChange = this.handleVisibleChange.bind(this);
  }
  handleVisibleChange(visible) {
    this.setState({
      visible
    })
  }
  onSelect() {
    return;
  }
  render() {
    return (
      <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">备注</Item>),
              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>设置合法/非法</Item>),
              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                <span style={{ marginRight: 5 }}>查看当日登录记录</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={(visible) => {this._handleVisibleChange(visible)}}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon className='popover-icon' type="ellipsis" />
            </div>
          </Popover>
    )
  }
}

export default PopoverR;