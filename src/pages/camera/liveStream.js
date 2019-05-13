import React, { Component } from 'react';
import Iframe from 'react-iframe';

class LiveStream extends Component{
  render() {
    return (
      <Iframe url="http://192.168.88.19:8082/index.html"
        width="100%"
        height="90%"
        id="myId"
        className="myClassname"
        position="absolute"/>
    )
  }
}
export default LiveStream;