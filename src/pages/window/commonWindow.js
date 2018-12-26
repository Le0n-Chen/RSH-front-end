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
        console.log(this.props);
        return(
            <div>
                {(!isLogin)?
                    <Login />:
                    <MainIndex {...this.props}/>
                }
            </div>
        )
    }
}

CommonWindow.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};

const CommonWindowSmart = connect(state => {
    return {
       isLogin: state.app.isLogin,
    };
  })(CommonWindow);
export default CommonWindowSmart;