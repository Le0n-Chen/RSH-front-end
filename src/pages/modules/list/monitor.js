import React, {Component} from 'react';
import Iframe from 'react-iframe'

class Monitor extends Component{
  render() {
    return(
      <Iframe url="http://192.168.88.19:8082/index.html"
        width="100%"
        height="80%"
        id="myId"
        className="myClassname"
        position="absolute"/>
    )
  }
}
export default Monitor;