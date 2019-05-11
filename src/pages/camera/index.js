import React, { Component } from 'react';
import mirror from 'mirrorx';
import PictureList from './pictureList';
import CameraIndex from './cameraIndex';
import PropTypes from 'prop-types';
let { Switch, Route } = mirror;

class Camera extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.url}`} exact component = { CameraIndex } />
        <Route path={`${this.props.match.url}/picture`} component = {PictureList} />
      </Switch>
    );
  }
}

Camera.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}

export default Camera;
