import React, {Component} from 'react';
class DatePickerChildren extends Component{
  constructor(props) {
    super();
  }
  render() {
    const {onClick, extra, children} = this.props;
    return (
      <div onClick={onClick} style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}>
        {children}
        <span style={{  color: '#888' }}>{extra}</span>
      </div>
    );
  }
}
export default DatePickerChildren;