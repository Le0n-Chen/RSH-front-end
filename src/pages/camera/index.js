import React, { Component } from 'react';
import mirror from 'mirrorx';
import PictureList from './pictureList';
import CameraIndex from './cameraIndex';
import PropTypes from 'prop-types';
let { Switch, Route, connect,withRouter } = mirror;

class Camera extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.formatDate);
    return (
      <Switch>
        <Route path={`${this.props.match.url}`} exact render={(props) => <CameraIndex {...props} formatDate={this.props.formatDate}/>} />
        <Route path={`${this.props.match.url}/picture`} render={(props) => <PictureList {...props} formatDate={this.props.formatDate}/>} />
      </Switch>
    );
  }
}

Camera.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  formatDate: PropTypes.object
}

const CameraSmart = withRouter(connect((state) => {
  return {
    formatDate: state.app.formatDate
  }
})(Camera));

export default CameraSmart;
