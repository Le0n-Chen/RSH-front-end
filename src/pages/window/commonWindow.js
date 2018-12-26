import React, { Component } from 'react';
import Login from '../base/login';
import PropTypes from 'prop-types';
import { actions, connect } from 'mirrorx';
import MainIndex from '../base/mainIndex';
class CommonWindow extends Component {
    constructor(){
        super();
        
    }
    render(){
        let {isLogin} = this.props; 
        return(
            <div className="window-common">
                <div className="window-left"></div>
                <div className="window-right"></div>
                <h4 className="window-title">LEON BM</h4>
                {(!isLogin)?
                    <Login />:
                    <MainIndex />
                }
            </div>
        )
    }
}

CommonWindow.propTypes = {
    isLogin: PropTypes.bool.isRequired
};

const CommonWindowSmart = connect(state => {
    return {
       isLogin: state.app.isLogin
    };
  })(CommonWindow);
export default CommonWindowSmart;